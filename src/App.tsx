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
import MobileHeader from "./components/MobileHeader";
import LightDarkToggle from "./components/LightDarkToggle";

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
      <MobileHeader setIsSidePanelOpen={setIsSidePanelOpen} />
      <div className="flex flex-col gap-8 pt-4 p-8 xs:pt-8 lg:w-[calc(100dvw-var(--sidebar-width))]  2xl:h-screen 2xl:min-h-[1120px]">
        <div className="flex flex-col gap-4 xs:flex-row xs:gap-8">
          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            <h1 className="text-2xl font-semibold ">Location:</h1>
            <LocationDropdown location={location} setLocation={setLocation} />
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            <h1 className="text-2xl font-semibold whitespace-nowrap">Map Type:</h1>
            <MapTypeDropdown layer={layer} setLayer={setLayer} />
          </div>
          <div className="ml-auto flex gap-4 items-center">
            <LightDarkToggle />
            <button onClick={() => setIsSidePanelOpen(true)} className="hidden xs:block">
              <Hamburger className='size-6 invert lg:hidden' />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 2xl:flex-1 2xl:min-h-0 md:grid-cols-2 2xl:grid-cols-4 2xl:grid-rows-4 gap-4">
          <div className="relative h-120 2xl:h-auto col-span-1 md:col-span-2 2xl:col-span-4 2xl:row-span-2 order-1">
            <Map coords={coords} onMapClick={onMapClick} layer={layer} />
            <MapLegend mapType={layer} />
          </div>
          <div className="col-span-1 2xl:row-span-2 order-2">
            <Suspense fallback={<CurrentSkeleton />}>
              <CurrentWeather coords={coords} />
            </Suspense>
          </div>
          <div className="col-span-1 2xl:row-span-2 order-3 2xl:order-4">
            <Suspense fallback={<DailySkeleton />}>
              <DailyForecast coords={coords} />
            </Suspense>
          </div>
          <div className="col-span-1 md:col-span-2 2xl:row-span-1 order-4 2xl:order-3">
            <Suspense fallback={<HourlySkeleton />}>
              <HourlyForecast coords={coords} />
            </Suspense>
          </div>

          <div className="col-span-1 md:col-span-2 2xl:row-span-1 order-5">
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
