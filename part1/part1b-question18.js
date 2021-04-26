function myTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);    
}

setInterval(myTime, 1000);