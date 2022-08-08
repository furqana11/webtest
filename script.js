//var Tanggal = prompt('Masukkan Tanggal yang ingin anda hitung (e.g: 11 Apr 2022)')

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');


const ultah = '11 Apr 2023'

function countdown(){
    const ultahDate = new Date(ultah);
    const currentDate = new Date();

    const totalSeconds =(ultahDate - currentDate)/1000;

    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600) % 24
    const minutes = (Math.floor(totalSeconds/60) % 60) % 60; 
    const seconds = Math.floor(totalSeconds) % 60;


    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
}

countdown();

setInterval(countdown, 1000);