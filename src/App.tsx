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
import LocationDropdown from "./components/dropdowns/LocationDropdown"
import { useQuery } from "@tanstack/react-query"
import { getGeocode } from "./api"


function App() {


  const [coordinates, setCoords] = useState<Coordinates>({
    lat: 10,
    long: 25
  })
  const [location, setLocation] = useState("Tokyo")

  const { data } = useQuery({
    queryKey: ["geocode", location],
    queryFn: (() => getGeocode(location))
  })
  const onMapClick = (lat: number, long: number) => {
    setCoords({ lat, long })
    setLocation("custom")
  }

  const coords = location === "custom"
    ? coordinates :
    {
      lat: data?.[0].lat ?? 0,
      long: data?.[0].lon ?? 0
    };

  return (

    <>
      <div className="flex flex-col gap-8">
        <LocationDropdown />
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
