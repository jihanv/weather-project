import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import type { Coordinates } from '../types'

type Props = {
    coords: Coordinates,
    onMapClick: (lat: number, long: number) => void
}
export default function Map({ coords, onMapClick }: Props) {
    const { lat, long } = coords
    return (
        <>
            <MapContainer
                center={[lat, long]}
                zoom={5}
                style={{ width: "700", height: "500px" }} >
                <MapClick onMapClick={onMapClick} coords={coords} />
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
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