const Apikey = 'VbqqagZePpLYjkoubOWsAhEf7kXBCKIu';

const cardlist = document.querySelector(".list-card");
const list = document.querySelector(".list");
const serach = document.querySelector("#serach");
const Citynames = document.querySelector("#Citynames");
const weatherText = document.querySelector("#weatherText");
const degree = document.querySelector("#degree");
const imgTime = document.querySelector("#imgTime");
const info = document.querySelector(".info");


const getCityies = async (city) =>{
    const url ='http://dataservice.accuweather.com/locations/v1/cities/autocomplete';
    const query = `?apikey=${Apikey}&q=${city}`;
    const request = await fetch(url + query)
    const response = await request.json()

    return response
}

// whene user type a city name
serach.addEventListener('keyup',(event)=>{
    if(event.target.value.length ===0){
        list.innerHTML ='';
        cardlist.classList.add('d-none');
        info.classList.remove('d-none');
    }else{
// a function gets all cities debending on the word you typed   
    getCityies(event.target.value.trim().toLowerCase())
    .then(data => {
        data.forEach(cities => {
            // console.log(cities.LocalizedName)
            list.innerHTML += `<h4 class="target-class" >${cities.LocalizedName}</h4><hr>`
            cardlist.classList.remove('d-none');
            info.classList.add('d-none')
        });
    }).catch(err => console.log(err))
    }
})

// when a user clicked city
list.addEventListener('click',(event) => {
    UpdateTheUi(event.target.innerText.trim().toLowerCase());
    localStorage.setItem('city',event.target.innerText.trim().toLowerCase())
});

// geting information about the city user clicked
const getCity = async (city) =>{
    const url ='http://dataservice.accuweather.com/locations/v1/cities/search/';
    const query = `?apikey=${Apikey}&q=${city}`;
    const request = await fetch(url + query)
    const response = await request.json()

    return response[0];
}


const UpdateTheUi = (city) =>{
    getCity(city).then(data => {
        Citynames.innerHTML = `${data.LocalizedName},${data.Country.LocalizedName}`; 
        serach.value='';
        return getWeather(data.Key);
    }).then(data => {

        weatherText.innerHTML = `${data.WeatherText}`;
        degree.innerHTML = `${data.Temperature.Metric.Value}&deg;C`;
        if(data.IsDayTime){
            imgTime.setAttribute('src','./day.jpg');
        }else{
            imgTime.setAttribute('src','./night.jpg');
        }
    });
    info.classList.remove('d-none');
    cardlist.classList.add('d-none');
}
// geting current weather about the city user clicked
const getWeather = async (cityCode) =>{
    const url ='http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${cityCode}?apikey=${Apikey}`;
    const request = await fetch(url + query)
    const response = await request.json()

    return response[0];
   
}

// geting Existing Saving City Weather from local storage
if(localStorage.getItem("city").length >0){
    UpdateTheUi(localStorage.getItem('city'));
}