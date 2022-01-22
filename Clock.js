function newClock() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

if (hour==0, hour<=12) {
    console.log(newClock, " AM");
}
if (hour>12, hour<=24) {
    console.log(newClock, " PM");
} 
else {
    console.log("Invalid number");
}

 hour = (hour < 10) ? "0" + hour : hour;
 minute = (minute < 10) ? "0" + minute : minute;
 second = (second < 10) ? "0" + second : second;

 setTimeout(newClock);

}