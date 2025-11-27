import Card from "./Card";
import mock_weather from "../../mockData/mock_weather.json"

// import { useSuspenseQuery } from '@tanstack/react-query'
// import { getWeather } from '../../api'

export default function AdditionalInformation() {
    // const { data } = useSuspenseQuery({
    //     queryKey: ["weather"],
    //     queryFn: () => getWeather({
    //         lat: 10,
    //         lon: 25
    //     })
    // })
    const data = mock_weather
    return (
        <>
            <Card title="Additional Weather Info " childrenClassName='flex flex-col gap-8'>
                {rows.map(({ label, value }) => (
                    <div key={label} className="flex justify-between">
                        <span className="text-gray-500">{label}</span>
                        <FormatComponent value={value} number={data.current[value]} />
                    </div>
                ))}
            </Card>
        </>
    )
}

function FormatComponent({ value, number }: { value: string, number: number }) {
    if (value === "sunrise" || value === "sunset") {
        return new Date(number * 1000).toLocaleTimeString(undefined, {
            hour: "numeric",
            minute: "2-digit",
            hour12: true
        })
    }
    return number
}
const rows = [
    {
        label: "Cloudiness (%)",
        value: "clouds",
    },
    {
        label: "UV Index",
        value: "uvi",
    },
    {
        label: "WInd Direction",
        value: "wind_deg",
    },
    {
        label: "Pressure",
        value: "pressure",
    },
    {
        label: "Sunrise",
        value: "sunrise",
    },
    {
        label: "Sunset",
        value: "sunset",
    }
] as const;