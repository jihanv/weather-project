import { useQuery } from "@tanstack/react-query"
import { getWeather } from "./api"
import Card from "./components/cards/Card"
import mock_weather from "./mockData/mock_weather.json"


function App() {
  // const { data } = useQuery({
  //   queryKey: ["weather"],
  //   queryFn: () => getWeather({
  //     lat: 10,
  //     lon: 25
  //   })
  // })

  const data = mock_weather
  return (

    <>
      <div className="flex flex-col gap-8">
        <Card>{JSON.stringify(data?.current).slice(0, 100)}</Card>
        <Card>{JSON.stringify(data?.hourly).slice(0, 100)}</Card>
        <Card>{JSON.stringify(data?.daily).slice(0, 100)}</Card>
      </div>
    </>
  )
}

export default App
