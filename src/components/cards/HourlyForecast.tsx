import Card from './Card'
// import mock_weather from "../../mockData/mock_weather.json"
import WeatherIcon from '../WeatherIcon'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getWeather } from '../../api'

export default function HourlyForecast() {
    const { data } = useSuspenseQuery({
        queryKey: ["weather"],
        queryFn: () => getWeather({
            lat: 10,
            lon: 25
        })
    })
    // const data = mock_weather
    return (
        <>
            <Card title="Hourly Forecast (48 Hours)" childrenClassName='flex flex-row gap-6 overflow-x-scroll'>
                {data.hourly.map((hour) => (
                    <div className='flex flex-col gap-2 items-center p-2' key={hour.dt.toString()}>
                        <p className='whitespace-nowrap' >{new Date(hour.dt * 1000).toLocaleTimeString(undefined, {
                            hour: "numeric",
                            minute: "2-digit",
                            hour12: true
                        })}</p>
                        <WeatherIcon alt="Weather Icon" src={hour.weather[0].icon} />
                        <p>{Math.round(hour.temp)}°C</p>
                    </div>
                ))}
            </Card>
        </>
    )
}