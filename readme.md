# Ticking Clock

Topic: Web Fundamentals, JS

<p style="color:grey;">Status: Not finish yet 01.20.2023
http://www.hackshop.org/levels/web-dev/set-css-clock-js-2
</p>

Try using what we've learned to make a clock with moving hands. Similar to `setTimeout()` which we've used to create a delay, we can also use `setInterval()` to run some function every period of time. In the case for our clock we want it to update every `1000 milliseconds`.

## Sarter CSS

```css
#face {
  background-color: #f3f3f3;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 6px solid black;
  position: relative;
}
    
#minutes, #hour, #seconds {
  position: absolute;
  left: 50%;
  top: 50%;
  transform-origin: top center;
}
    
#seconds {
  background-color: red;
  height: 130px;
  width: 2px;
}
    
#hour {
  background-color: black;
  height: 100px;
  width: 8px;
  transform: rotate(125deg);
}
    
#minutes {
  background-color: grey;
  height: 120px;
  width: 4px;
  transform: rotate(255deg);
}
```

<br/>

## Starter JS

```js
function getSecondsSinceStartOfDay() {
  return new Date().getSeconds() + 
    new Date().getMinutes() * 60 + 
    new Date().getHours() * 3600;
}
    
setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    console.log(time);
    // your code here
}, 1000);

```