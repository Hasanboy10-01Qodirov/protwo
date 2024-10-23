import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./map.scss";
import { useTranslation } from "react-i18next";
const MapComponent = () => {
  const { t } = useTranslation();
  const center = [41.2995, 69.2401];

  return (
    <div className="map-container">
      <h2 className="map-container-title">
        {t("map_title")}
        <p className="map-container-text">{t("map_place")}</p>
        ...
      </h2>
      <MapContainer
        center={center}
        zoom={15}
        scrollWheelZoom={false}
        className="leaflet-container"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />
        <Marker position={center}>
          <Popup>{t("location_popup")}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
