import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function Map() {
  return (
    <div className="h-screen w-full">
      <MapContainer center={[-16.5, -68.15]} zoom={13} className="h-full w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={[-16.5, -68.15]}>
          <Popup>Tu ubicación</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
