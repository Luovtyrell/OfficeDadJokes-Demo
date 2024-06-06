import { Joke } from "../models/apiModels"
const getJokeUrl = 'https://icanhazdadjoke.com/'
const jokeViewInHTML: HTMLElement | null = document.getElementById('jokeView')

export async function getJoke(): Promise<Joke> {
    const jokeData = await fetch(getJokeUrl, {
        headers: {
            'Accept': 'application/json'
        }
    })
    const jokeObj: Joke = await jokeData.json()
    jokeViewInHTML ? jokeViewInHTML.innerHTML = jokeObj.joke : console.error('Element with id jokeView not found')
    console.log(jokeObj)
    return jokeObj
}
