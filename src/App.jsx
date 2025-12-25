import { useState } from "react"
import WeatherCard from "./WeatherCard"


const App = () => {
  const key = 'd76a396d411d4017a08101758252512'
  const [input, setInput] = useState("")
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    try {
      setLoading(true)
      setWeatherData(null)
      const res = await fetch(`https://api.weatherapi.com/v1/current.json?q=${input}&key=${key}`)
      if (!res.ok) {
        throw new Error("Error")
      }
      const data = await res.json()
      setWeatherData(data)
      setLoading(false)
    } catch (err) {
      alert("Failed to fetch weather data")
    }

  }

  return (
    <div  className=' '>
      <div>
        <h1 className="m-6 font-bold text-5xl"> Weather App </h1>
        <input
          type="text"
          className="border p-2 rounded-lg ml-14 mt-8"
          value={input}
          placeholder="Enter a city"
          onChange={(e) => { setInput(e.target.value) }} />
        <button
          onClick={handleSubmit}
          className=" border p-2 ml-2 bg-green-600 text-white rounded-lg active:bg-green-800">
          Search
        </button>
      </div>
      {
        loading ? <p className="m-6 text-2xl font-bold">Loading data...</p> : <div>
          {
            weatherData && <WeatherCard data={weatherData} />
          }
        </div>
      }

    </div>
  )
}

export default App
