import { getJoke, voteJoke, changeVote } from "./APIs/jokeFeatures.js";

document.addEventListener('DOMContentLoaded', () => {
  const scoreButtons = document.querySelectorAll('.score-button')
  const buttonNextJoke = document.getElementById('button')
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
  }
  addEventListeners()
  getJoke()
})