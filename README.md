# React Weather App
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### Screen Shot 
  ![React Weather App](https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/586f038ec4d9cc6e5e82f8f3/screenshot.png)

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
This app was built on the React.js framework, and uses vanilla JavaScript to parse user input make an API call to the Open Weather Database. This then updates state in React and is conditionally rendered to the screen with styling reflecting current weather conditions.  This app is responsive for mobile screens, using media query to determine screen width.

### Contributing
This project was developed as part of the Web Development Immersive program at General Assembly in NYC, January 2017.

### Complications/Future Improvements 
  1. Additional conditional logic to further refine conditions rendered to screen. (Examplee: in addition to temperature rendering in different colors for different ranges, add rendering for conditions like rain/snow/etc).
  1. Add CSS to improve user experience

### Author
  [Franklin Brooks](http://www.franklinchristopherbrooks.com) 
