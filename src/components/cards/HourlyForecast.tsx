import Card from './Card'
// import mock_weather from "../../mockData/mock_weather.json"
import WeatherIcon from '../WeatherIcon'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getWeather } from '../../api'
import type { ForecastProps } from '../../types'

export default function HourlyForecast({ coords }: ForecastProps) {
    const { data } = useSuspenseQuery({
        queryKey: ["weather", coords],
        queryFn: () => getWeather({
            lat: coords.lat,
            lon: coords.long
        })
    })
    // const data = mock_weather
    return (
        <>
            <Card title="Hourly Forecast (48 Hours)" childrenClassName='flex flex-row gap-6 overflow-x-scroll'>
                {data.hourly.map((hour) => (
                    <div className='flex flex-col gap-2 items-center p-2 2xl:justify-between' key={hour.dt.toString()}>
                        <p className='whitespace-nowrap 2xl:scale-110' >{new Date(hour.dt * 1000).toLocaleTimeString(undefined, {
                            hour: "numeric",
                            minute: "2-digit",
                            hour12: true
                        })}</p>
                        <WeatherIcon className='2xl:size-10' alt="Weather Icon" src={hour.weather[0].icon} />
                        <p className='2xl:scale-110'>{Math.round(hour.temp)}°C</p>
                    </div>
                ))}
            </Card>
        </>
    )
}