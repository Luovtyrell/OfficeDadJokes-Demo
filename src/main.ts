import { getJoke, voteJoke, changeVote } from "./APIs/jokeFeatures.js";
import { getWeather } from "./APIs/weatherFeatures.js";


document.addEventListener('DOMContentLoaded', () => {
  const scoreButtons = document.querySelectorAll('.score-button')
  const buttonNextJoke = document.getElementById('button')
  const weatherElement = document.getElementById('weather')
  let jokeText = ''

  function addEventListeners() {
    if (buttonNextJoke) {
      buttonNextJoke.addEventListener('click', async () => {
        const joke = await getJoke()
        jokeText = joke.joke
      })
    }
    scoreButtons.forEach(button => {
      button.addEventListener('click', () => {
        const score = parseInt(button.getAttribute('data-score') || '0')
        voteJoke(score)
        changeVote(jokeText, score)
      })
    })
    getJoke()
  }

  async function displayWeather() {
    const weatherData = await getWeather()
    if (weatherData && weatherElement) {
      const locationName = weatherData.location.name
      const temperatureCelsius = weatherData.current.temp_c
      const weatherIconUrl = weatherData.current.condition.icon
      weatherElement.innerHTML = `<img src="${weatherIconUrl}" alt="Weather Icon">${temperatureCelsius}°C | ${locationName}`;
    }
  }
  
  addEventListeners()
  displayWeather()
})