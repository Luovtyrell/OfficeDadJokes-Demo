import { Joke } from "../models/apiModels"
const getJokeUrl = 'https://icanhazdadjoke.com/'

export async function getJoke(): Promise<Joke> {
    const jokeData = await fetch(getJokeUrl, {
        headers: {
            'Accept': 'application/json'
        }
    })
    const jokeObj: Joke = await jokeData.json()
    console.log(jokeObj)
    return jokeObj
}
