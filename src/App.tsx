// import { useQuery } from "@tanstack/react-query"
// import { getWeather } from "./api"
// import Card from "./components/cards/Card"
import AdditionalInformation from "./components/cards/AdditionalInformation"
import CurrentWeather from "./components/cards/CurrentWeather"
import DailyForecast from "./components/cards/DailyForecast"
import HourlyForecast from "./components/cards/HourlyForecast"
// import mock_weather from "./mockData/mock_weather.json"


function App() {
  // const { data } = useQuery({
  //   queryKey: ["weather"],
  //   queryFn: () => getWeather({
  //     lat: 10,
  //     lon: 25
  //   })
  // })

  // const data = mock_weather
  return (

    <>
      <div className="flex flex-col gap-8">
        <CurrentWeather />
        <HourlyForecast />
        <DailyForecast />
        <AdditionalInformation />
      </div>
    </>
  )
}

export default App
