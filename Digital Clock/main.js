let day = document.querySelector('#today')
let time = document.querySelector('#time')
let date = document.querySelector('#date')


// set interval wuxuu noo qabnaa in every second uu noo woco functionka Today
setInterval(()=>{
    today()
},1000);

function today(){
    let today = new Date()
    let monthes =['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let currenttime = `${today.getHours() <= 9 ? '0' + today.getHours() : today.getHours()} : ${today.getMinutes() <= 9 ? '0' + today.getMinutes() : today.getMinutes() } : ${today.getSeconds() <= 9 ? '0' + today.getSeconds() : today.getSeconds()}`;
    time.innerHTML =currenttime
    let currentDate = `${days[today.getDay()]}, ${today.getDate()} ${monthes[today.getMonth()]}, ${today.getFullYear()}`;
    date.innerHTML = currentDate
    day.innerHTML = currentDay
}
