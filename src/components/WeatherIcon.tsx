
type Props = {
    src: string
    alt?: string
}

export default function WeatherIcon({ src, alt = "" }: Props) {
    return (
        <>
            <img
                className='size-8'
                src={`https://openweathermap.org/img/wn/${src}.png`}
                alt={alt} />
        </>
    )
}