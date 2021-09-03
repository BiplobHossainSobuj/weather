const apiKeys = `7ae2c8b91922a6b5102ec93d4148167f
`;
const getWeather = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKeys}&units=metric`;
    fetch(url)
        .then(res=> res.json())
        .then(data => displayWeather(data))
};

const getCity = (id,text) =>{
    document.getElementById(id).innerText = text;
}
const displayWeather = temperature => {
    getCity('city',temperature.name);
    getCity('temp',temperature.main.temp);
    getCity('situation',temperature.weather[0].main);
    //set icons
    const url = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const icon = document.getElementById('icons');
    icon.setAttribute('src',url);
}