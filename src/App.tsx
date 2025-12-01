// import { useQuery } from "@tanstack/react-query"
// import { getWeather } from "./api"
// import Card from "./components/cards/Card"
import { useState } from "react"
import AdditionalInformation from "./components/cards/AdditionalInformation"
import CurrentWeather from "./components/cards/CurrentWeather"
import DailyForecast from "./components/cards/DailyForecast"
import HourlyForecast from "./components/cards/HourlyForecast"
import Map from "./components/Map"
import type { Coordinates } from "./types"


function App() {


  const [coords, setCoords] = useState<Coordinates>({
    lat: 10,
    long: 25
  })

  const onMapClick = (lat: number, long: number) => {
    setCoords({ lat, long })
  }

  return (

    <>
      <div className="flex flex-col gap-8">
        <Map coords={coords} onMapClick={onMapClick} />
        <CurrentWeather coords={coords} />
        <HourlyForecast coords={coords} />
        <DailyForecast coords={coords} />
        <AdditionalInformation coords={coords} />
      </div>
    </>
  )
}

export default App
