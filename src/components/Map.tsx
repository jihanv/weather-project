// ✅ Types are available here
import { MapContainer, Marker, TileLayer } from 'react-leaflet'

export default function Map() {
    return (
        <>
            <MapContainer
                center={[10, 15]}
                zoom={5}
                style={{ width: "500px", height: "500px" }} >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[10, 15]}>
                </Marker>
            </MapContainer>
        </>
    )
}