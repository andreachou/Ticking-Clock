// function getSecondsSinceStartOfDay() {
//     return new Date().getSeconds() +
//         new Date().getMinutes() * 60 +
//         new Date().getHours() * 3600;
// }


function setTime(){
    // get local time
    var date = new Date;
    var seconds = date.getSeconds()
    var minutes = date.getMinutes()
    var hours = date.getHours() 

    // create a variable with hour hand angle in degrees
    var angle = 6 * minutes;

    //set the angle of hour hand element
    var elements = document.getElementById("minutes");
    for(var i=0; i < elements.clientHeight; i++){
        elements.style.transform = 'rotateZ('+ angle +'deg)';
    }
}



setInterval(function () {
    // var time = getSecondsSinceStartOfDay();
    console.log(time);
    // seconds
    time += 1;
    // seconds = document.getElementById("seconds");
    seconds.style.transform = "rotateZ("+ 3 + "deg)";  // not sure why we put this way on the equation's right hand side
}, 1000);
