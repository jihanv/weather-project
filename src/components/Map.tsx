import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import "@maptiler/leaflet-maptilersdk";
import type { Coordinates } from '../types'
import { useEffect } from 'react';
import { MaptilerLayer } from "@maptiler/leaflet-maptilersdk";


const API_KEY = import.meta.env.VITE_API_KEY;
const MAP_TILER_KEY = import.meta.env.VITE_MAP_TILER;
type Props = {
    coords: Coordinates,
    layer: string,
    onMapClick: (lat: number, long: number) => void
}
export default function Map({ coords, onMapClick, layer }: Props) {
    const { lat, long } = coords
    return (
        <>
            <MapContainer
                center={[lat, long]}
                zoom={5}
                style={{ width: "100%", height: "100%" }} >
                <MapClick onMapClick={onMapClick} coords={coords} />
                <MapTileLayer />
                <TileLayer
                    opacity={0.7}
                    url={`https://tile.openweathermap.org/map/${layer}/{z}/{x}/{y}.png?appid=${API_KEY}`} />
                <Marker position={[lat, long]}>
                </Marker>
            </MapContainer>
        </>
    )
}

type MapClickProps = {
    onMapClick: (lat: number, long: number) => void,
    coords: Coordinates,

}

function MapClick({ onMapClick, coords }: MapClickProps) {
    const map = useMap()

    //Pan on click
    map.panTo([coords.lat, coords.long])

    map.on("click", (e) => {
        // Get the coordinates from the e event
        const { lat, lng } = e.latlng
        onMapClick(lat, lng)
        //Set the lat and long to where we click
    })

    return null
}

function MapTileLayer() {

    const map = useMap()

    useEffect(() => {
        const tileLayer = new MaptilerLayer({ style: "basic-dark", apiKey: MAP_TILER_KEY })
        tileLayer.addTo(map)
        return () => {
            map.removeLayer(tileLayer)
        }
    }, [map])
    return null
}