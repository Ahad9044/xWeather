import React from 'react'

const WeatherCard = ({ data }) => {
    const { wind_kph, humidity } = data.current
    const { temp_c } = data.current
    const condition = data.current.condition.text

    return (
        <>
            <div className='weather-cards p-10 flex gap-8'>
                <div className='w-36 h-18 rounded-lg shadow-lg bg-blue-50 text-center pt-4 '>
                    <h1 className='font-bold'>Temperature </h1>
                    <p>{temp_c} C</p>
                </div>
                <div className='w-36 h-18 rounded-lg shadow-lg bg-blue-50 text-center pt-4 '>
                    <h1 className='font-bold'>Humidity</h1>
                    <p> {humidity}% </p>
                </div>
                <div className='w-36 h-18 rounded-lg shadow-lg bg-blue-50 text-center pt-4 '>
                    <h1 className='font-bold'> Condition </h1>
                    <p>  {condition}</p>

                </div>
                <div className='w-36 h-18 rounded-lg shadow-lg bg-blue-50 text-center pt-4 '>
                    <h1 className='font-bold'>Wind Speed</h1>
                    <p>  {wind_kph} kph</p>
                </div>
            </div>
        </>
    )
}

export default WeatherCard
