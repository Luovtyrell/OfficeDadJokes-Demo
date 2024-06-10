import { getJoke } from "../src/APIs/jokeFeatures.ts"
import { Joke } from "../src/interfaces/APIsInterfaces.ts"
import { getWeather } from "../src/APIs/weatherFeatures.ts"
import fetchMock from 'jest-fetch-mock'

fetchMock.enableMocks()

// GETJOKE TEST
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

//GETWEATHER TEST
describe('getWeather function', () => {
  beforeEach(() => {
    fetchMock.resetMocks()
  })

  test('It returns weather data successfully', async () => {
    const mockWeatherData = {
      location: { name: 'Barcelona' },
      current: { temp_c: 20 }
    }
    fetchMock.mockResponseOnce(JSON.stringify(mockWeatherData))

    const weatherData = await getWeather()
    expect(fetchMock).toHaveBeenCalledWith(expect.stringContaining('Barcelona'))
    expect(weatherData).toEqual(mockWeatherData)
  })
})