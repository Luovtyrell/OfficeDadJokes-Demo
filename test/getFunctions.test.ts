import { getJoke } from "../src/APIs/getFunctions.ts"
import { Joke } from "../src/models/apiModels"
import fetchMock from 'jest-fetch-mock'

fetchMock.enableMocks()

describe('getJoke', () => {
  test('It returns a joke object', async () => {
    const jokeResponse: Joke = {
      id: 'dlfhlaf',
      joke: 'Dad Joke',
      status: 200
    }
    fetchMock.mockResponseOnce(JSON.stringify(jokeResponse))

    const joke = await getJoke()
    expect(joke).toEqual(jokeResponse)
  })
})