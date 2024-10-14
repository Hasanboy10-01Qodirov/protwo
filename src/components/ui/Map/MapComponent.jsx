import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./map.scss";
const MapComponent = () => {
  const center = [41.2995, 69.2401];

  return (
    <div className="map-container">
      <h2 className="map-container-title">
        Sizning reklamangiz uchun <p className="map-container-text">joylar</p>
        ...
      </h2>
      <MapContainer center={center} zoom={15} className="leaflet-container">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />
        <Marker position={center}>
          <Popup>Bu yer Toshkent shahri.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
