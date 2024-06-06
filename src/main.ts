import { getJoke } from "./APIs/getFunctions.js";

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('button')

  if (button) {
    button.addEventListener('click', () => {
      getJoke()
    })
  }
})

getJoke()