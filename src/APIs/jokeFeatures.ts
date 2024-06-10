import { Joke, JokeReport } from "../interfaces/APIsInterfaces"

//Global variables
const getJokeUrl = 'https://icanhazdadjoke.com/'
const jokeViewInHTML: HTMLElement | null = document.getElementById('jokeView')
let reportJokes: JokeReport[] = []


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

export function voteJoke(score: number): void {
    if (jokeViewInHTML) {
        const jokeText = jokeViewInHTML.innerText
        const report: JokeReport = {
            joke: jokeText,
            score: score,
            date: new Date().toISOString()
        }
        reportJokes.push(report)
        console.log(reportJokes, report)
    }
}

export function changeVote(joke: string, newScore: number): void {
    if (jokeViewInHTML) {
        reportJokes = reportJokes.filter(report => report.joke !== joke)

        const updatedReport: JokeReport = {
            joke: joke,
            score: newScore,
            date: new Date().toISOString()
        }
        reportJokes.push(updatedReport)
        console.log(`Score updated for joke: ${joke}, New score: ${newScore}, Updated array reportJokes:`, reportJokes)
    }
}
