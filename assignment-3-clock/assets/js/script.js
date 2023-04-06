function updateTime(){
    const d = new Date();

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let month = months[d.getMonth()];
    let weekDay = weekDays[d.getDay()];

    let day = d.getDay();
    let dayStr = day.toString().padStart(2, '0');

    let minute = d.getMinutes();
    let minuteStr = minute.toString().padStart(2, '0');
    minuteStr += " min";

    let second = d.getSeconds();
    let secondStr = second.toString().padStart(2, '0');
    secondStr += " sec";

    document.getElementById("spanDay").innerHTML = dayStr;
    document.getElementById("spanMonth").innerHTML = month;
    document.getElementById("spanYear").innerHTML = d.getFullYear();
    document.getElementById("spanWeekDay").innerHTML = weekDay;

    document.getElementById("spanMin").innerHTML = minuteStr;
    document.getElementById("spanSec").innerHTML = secondStr;

    let hours = d.getHours();

    if (parseInt(hours) > 12) {
        hours -= 12;
        let hourStr = hours.toString().padStart(2, '0');
        hourStr += " hr";
        document.getElementById("spanHrs").innerHTML = hourStr;
        document.getElementById("spanAMPM").innerHTML = "PM";
    } else {
        let hourStr = hours.toString().padStart(2, '0');
        document.getElementById("spanHrs").innerHTML = hourStr;
        document.getElementById("spanAMPM").innerHTML = "AM";
    }

    // body css
    document.body.style.backgroundColor = "ddd4d4";

    // clock

    const secondHand = document.querySelector('.second-hand');
    const minsHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');

    const seconds = d.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = d.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = d.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}

setInterval(updateTime, 1000);

// updateTime();