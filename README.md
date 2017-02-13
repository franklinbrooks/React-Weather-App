# React Weather App
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### Screen Shot 
  ![Tic Tac Toe Game](https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/584a367bc4d9cc23bb84ff10/screenshot.png)

### Technologies Used
- React.JS
- HTML
- CSS
- JavaScript

### Code Example quote
```javascript

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
    }
  };
    xhrRequest.open('GET', `http://api.openweathermap.org/data/2.5/weather?q=${this.userZip},us&appid=43cb3020d8a9ca504a08851610ffebc1`);
    xhrRequest.send();
}

````
### Build Strategy
This game uses JavaScript to handle logic, and to bind player mouse clicks to variable asignments. JS also interacts with HTML and CSS to manage visual elements.

### Contributing
This project was developed as part of the Web Development Immersive program at General Assembly in NYC, January 2017.

### Complications/Future Improvements 
  1. Complete single-player JavaScript functionality
  1. Add CSS to improve user experience

### Author
  [Franklin Brooks](http://www.franklinchristopherbrooks.com) 
