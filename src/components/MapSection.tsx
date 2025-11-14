'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Butley Mills Studio coordinates
const BUTLEY_MILLS = {
  lat: 52.1395,
  lng: 1.4503,
};

export default function MapSection() {
  // Create custom icon
  const customIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <div className="w-full h-full flex flex-col">
      <div className="p-16">
        <h2 className="text-4xl font-spectral font-bold mb-4">Visit</h2>
        <p className="text-lg">Butley Mills Studio, UK</p>
      </div>
      <div className="flex-1 grayscale">
        <MapContainer
          center={[BUTLEY_MILLS.lat, BUTLEY_MILLS.lng]}
          zoom={13}
          className="w-full h-full"
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[BUTLEY_MILLS.lat, BUTLEY_MILLS.lng]} icon={customIcon}>
            <Popup>
              <strong>Butley Mills Studio</strong>
              <br />
              Walnut Works
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
