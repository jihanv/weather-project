// ✅ Types are available here
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet'
import "leaflet/dist/leaflet.css"

export default function Map() {
    return (
        <>
            <MapContainer
                center={[10, 25]}
                zoom={5}
                style={{ width: "1000px", height: "500px" }} >
                <MapClick />
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[10, 25]}>
                </Marker>
            </MapContainer>
        </>
    )
}

function MapClick() {
    const map = useMap()

    map.on("click", (e) => {
        // Get the coordinates from the e event
        const { lat, lng } = e.latlng
        //Pan on click
        map.panTo([lat, lng])
    })

    return null
}