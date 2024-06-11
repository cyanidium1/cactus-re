import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 40.7128, // Default latitude
  lng: -74.006, // Default longitude
};

const GoogleMapComponent = ({ locationGmapsLink }) => {
  // Extract latitude and longitude from the Google Maps link
  const urlParams = new URLSearchParams(locationGmapsLink.split("?")[1]);
  const latLngString = urlParams.get("q");
  const [lat, lng] = latLngString
    ? latLngString.split(",")
    : [center.lat, center.lng];

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: parseFloat(lat), lng: parseFloat(lng) }}
        zoom={15}
      >
        <Marker position={{ lat: parseFloat(lat), lng: parseFloat(lng) }} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
