import { voteJoke, changeVote, getRandomJoke } from "./APIs/jokeFeatures.js";
import { getWeather } from "./APIs/weatherFeatures.js";

document.addEventListener('DOMContentLoaded', () => {
  const scoreButtons = document.querySelectorAll('.score-button')
  const buttonNextJoke = document.getElementById('button')
  const weatherElement = document.getElementById('weather')
  let jokeText = ''

  function addEventListeners() {
    if (buttonNextJoke) {
      buttonNextJoke.addEventListener('click', async () => {
        const joke = await getRandomJoke()
        if ('joke' in joke) { //Dad Joke joke interface: joke
          jokeText = joke.joke
        } else {  //Chuck Norris joke interface: value
          jokeText = joke.value
        }
      })
    }
    scoreButtons.forEach(button => {
      button.addEventListener('click', () => {
        const score = parseInt(button.getAttribute('data-score') || '0')
        voteJoke(score)
        changeVote(jokeText, score)
      })
    })
    getRandomJoke()
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