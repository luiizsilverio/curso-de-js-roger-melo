const cityForm = document.querySelector('[data-js="change-location"]')
const cityCard = document.querySelector('[data-js="city-card"]')
let timeImg = document.querySelector('[data-js="time"]')
const timeIcon = document.querySelector('[data-js="time-icon"]')

cityForm.addEventListener('submit', async event => {
  event.preventDefault()

  const inputValue = event.target.city.value
  const { Key, LocalizedName } = await getCityData(inputValue)

  const { WeatherText, Temperature, IsDayTime, WeatherIcon } = await getCityWeather(Key);    

  const weather = document.querySelector('[data-js="weather-details"]');
  const cidade = weather.querySelector('.cidade');
  const clima = weather.querySelector('.clima');
  const temperatura = weather.querySelector('.temperatura > span');
  
  cidade.textContent = LocalizedName;
  clima.textContent = WeatherText;
  temperatura.textContent = Temperature.Metric.Value;

  timeIcon.innerHTML = `<img src="./src/icons/${WeatherIcon}.svg" />`

  if (IsDayTime) {
    console.log(timeImg.getAttribute('src'))
    timeImg.src = './src/day.svg'
  } else {
    timeImg.src = './src/night.svg'
  }

  cityCard.classList.remove('hidden')  
  cityForm.reset()
})
