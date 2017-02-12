import React, { Component } from 'react';
import './App.css';

console.log('JS working!');

class App extends Component {
  constructor() {
    super();
    this.state = {
      url: `http://api.openweathermap.org/data/2.5/weather?q=${this.userZip},us&appid=43cb3020d8a9ca504a08851610ffebc1`,
      data: null,
      userZip: '',
      location: 'Get your weather',
      temp: 'Temperature',
      description: 'Local Conditions',
      hi: 'High',
      lo: "Low"
    }
    this.getWeather = this.getWeather.bind(this);
    this.tempToF = this.tempToF.bind(this);
  }

getWeather() {
  let newZip = document.getElementById('zip');
  this.userZip = newZip.value;
  console.log(this.userZip);
  const xhrRequest = new XMLHttpRequest();
  xhrRequest.onreadystatechange = () => {
    if (xhrRequest.readyState === 4 && xhrRequest.status === 200) {
      this.data = JSON.parse(xhrRequest.responseText);
    this.setState({
      location: this.data.name,
      temp: this.data.main.temp,
      description: this.data.weather[0].description,
      hi: this.data.main.temp_max,
      lo: this.data.main.temp_min
    });
      console.log(this.state.location);
      console.log(this.state.temp);
      console.log(this.state.description);
      console.log(this.state.hi);
      console.log(this.state.lo);
    }
  };
    xhrRequest.open('GET', `http://api.openweathermap.org/data/2.5/weather?q=${this.userZip},us&appid=43cb3020d8a9ca504a08851610ffebc1`);
    xhrRequest.send();
}

  tempToF(temp) {
    if (typeof temp === 'string') {
      return temp;
    } else {
    temp = (temp * (9/5) - 459.67);
    temp = Math.round(temp * 10) / 10;

    let temperature = document.getElementById('temperature');
    if (temp > 90) {  // if temp is lo/hi change class to blue/red
      temperature.className = "red";
    } else if (temp < 40) {
      temperature.className = "blue";
    } else {
      temperature.className = "black";
    }

    return temp;
  }
}

  handleChange(e) {
    console.log(e.target.value); // Set state of zipcode to whatever is in the input
    this.setState({
      userZip: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <div className="main">
          <article>
            <h1>Mobile Weather App</h1>


            <form>
              <input
                className="input"
                id="zip"
                name="zipcode"
                placeholder="Zip code"
                type="text"
                value={this.state.userZip}
                onChange={this.handleChange}
              />
              <button
                id="mySubmitButton"
                type="button"
                onClick={this.getWeather}>Get weather
              </button>
            </form>


              <br />
              <br />
            <div id='location'>
              {this.state.location}
            </div>
            <br />
            <div id='temperature'>
             {this.tempToF(this.state.temp)} &#176;F
            </div>
            <br />
            <div id='description'>
             {this.state.description}
            </div>
            <br />
            <div className='twins'>
              Today's Max &nbsp;
            </div>
            <div className='twins'>
              &nbsp; Today's Min
            </div>
            <br />
            <div className='twins' id='high'>
              {this.tempToF(this.state.hi)}&#176;F &nbsp;
            </div>
            <div className='twins' id='low'>
             &nbsp; {this.tempToF(this.state.lo)} &#176;F
            </div>
          </article>
          <footer>
            <p>Developed by <a href="http://www.franklnchristopherbrooks.com">Franklin Brooks</a>.</p>
            <p>Created with <span className="red">♥</span> at <span className="name"><a href="http://www.generalassemb.ly">GA</a></span></p>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;


