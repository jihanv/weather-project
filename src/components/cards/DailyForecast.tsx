
import Card from './Card'
import WeatherIcon from '../WeatherIcon'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getWeather } from '../../api'
import type { ForecastProps } from '../../types'

// type Props = { }

export default function DailyForecast({ coords }: ForecastProps) {

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
            <Card title="Daily Forecast" childrenClassName='flex flex-col gap-4 2xl:justify-between'>
                {data.daily.map((day) => {
                    return (
                        <div
                            key={day.dt}
                            className='flex justify-between'
                        >
                            <p className='w-9'>{new Date(day.dt * 1000).toLocaleDateString(undefined, {
                                weekday: "short",

                            })}</p>
                            <WeatherIcon src={day.weather[0].icon} alt="Weather Icon"></WeatherIcon>
                            <p>{Math.round(day.temp.day)}°C</p>
                            <p className='text-gray-500/75'>{Math.round(day.temp.min)}°C</p>
                            <p className='text-gray-500/75'>{Math.round(day.temp.max)}°C</p>
                        </div>
                    )
                })}

            </Card>
        </>
    )
}