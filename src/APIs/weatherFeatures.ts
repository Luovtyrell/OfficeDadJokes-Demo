import { WeatherData } from "../interfaces/APIsInterfaces";

const apiKey = '86ba0fccaeda47a29d5153205241006'
const apiWeatherUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Barcelona`

export async function getWeather(): Promise<WeatherData | null> {
  try {
    const response = await fetch(apiWeatherUrl)
    if (!response.ok) {
      throw new Error('Failed to fetch weather data')
    }
    const data = await response.json()
    console.log(data)
    return data as WeatherData
  } catch (error) {
    console.error('Error fetching weather data:', error)
    return null
  }
}