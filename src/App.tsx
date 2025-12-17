// import { useQuery } from "@tanstack/react-query"
// import { getWeather } from "./api"
// import Card from "./components/cards/Card"
import { Suspense, useState } from "react";
import AdditionalInformation from "./components/cards/AdditionalInformation";
import CurrentWeather from "./components/cards/CurrentWeather";
import DailyForecast from "./components/cards/DailyForecast";
import HourlyForecast from "./components/cards/HourlyForecast";
import Map from "./components/Map";
import type { Coordinates } from "./types";
import LocationDropdown from "./components/dropdowns/LocationDropdown";
import { useQuery } from "@tanstack/react-query";
import { getGeocode } from "./api";
import MapTypeDropdown from "./components/dropdowns/MapTypeDropdown";
import MapLegend from "./components/MapLegend";
import CurrentSkeleton from "./components/skeletons/CurrentSkeleton";
import HourlySkeleton from "./components/skeletons/HourlySkeleton";
import DailySkeleton from "./components/skeletons/DailySkeleton";
import AdditionalInfoSkeleton from "./components/skeletons/AdditionalInfoSkeleton";
import SidePanel from "./components/SidePanel";
import Hamburger from "/src/assets/hamburger.svg?react"

function App() {
  const [coordinates, setCoords] = useState<Coordinates>({
    lat: 10,
    long: 25,
  });
  const [layer, setLayer] = useState("clouds_new");
  const [location, setLocation] = useState("Tokyo");
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false)

  const { data: geocodeData } = useQuery({
    queryKey: ["geocode", location],
    queryFn: () => getGeocode(location),
  });
  const onMapClick = (lat: number, long: number) => {
    setCoords({ lat, long });
    setLocation("custom");
  };

  const coords =
    location === "custom"
      ? coordinates
      : {
        lat: geocodeData?.[0].lat ?? 0,
        long: geocodeData?.[0].lon ?? 0,
      };

  return (
    <>

      <div className="flex flex-col gap-8 p-8 xs:pt-8 lg:w-[calc(100dvw-var(--sidebar-width))]  2xl:h-screen">
        <div className="flex gap-8">
          <div className="flex gap-4">
            <h1 className="text-2xl font-semibold ">Location:</h1>
            <LocationDropdown location={location} setLocation={setLocation} />
          </div>
          <div className="flex gap-4">
            <h1 className="text-2xl font-semibold ">Map Type:</h1>
            <MapTypeDropdown layer={layer} setLayer={setLayer} />
          </div>
          <button onClick={() => setIsSidePanelOpen(true)}>
            <Hamburger className='size-8 invert ml-auto lg:hidden' />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  2xl:grid-cols-4 2xl:grid-rows-4 gap-4">
          <div className="relative h-120 col-span-1 md:col-span-2 2xl:col-span-4 2xl:row-span-2">
            <Map coords={coords} onMapClick={onMapClick} layer={layer} />
            <MapLegend mapType={layer} />
          </div>
          <div className="col-span-1 2xl:row-span-2">
            <Suspense fallback={<CurrentSkeleton />}>
              <CurrentWeather coords={coords} />
            </Suspense>
          </div>
          <div className="col-span-1">
            <Suspense fallback={<DailySkeleton />}>
              <DailyForecast coords={coords} />
            </Suspense>
          </div>
          <div className="col-span-1 md:col-span-2">
            <Suspense fallback={<HourlySkeleton />}>
              <HourlyForecast coords={coords} />
            </Suspense>
          </div>

          <div className="col-span-1 md:col-span-2">
            <Suspense fallback={<AdditionalInfoSkeleton />}>
              <AdditionalInformation coords={coords} />
            </Suspense>
          </div>
        </div>
      </div>
      <SidePanel
        isSidePanelOpen={isSidePanelOpen}
        setIsSidePanelOpen={setIsSidePanelOpen}
        coords={coords} />

    </>
  );
}

export default App;
