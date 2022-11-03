
let countDownDate = new Date("Nov 9, 2022 00:00:00").getTime();

const countdownfunction = () => {
    let now = new Date().getTime();
    let distance = countDownDate - now;

     //days hours minits seconds
     let days = Math.floor(distance / (1000*60*60*24));
     let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     let seconds = Math.floor((distance % (1000 * 60)) / 1000);


     document.getElementById("demo").innerHTML = days + "T " + hours + "H " + minutes + "m " + seconds + "s ";

}

var intervalId = window.setInterval(function(){
    // call your function here
    countdownfunction();

    
  }, 1000);


