// src/components/LocationInfo.tsx
import React from "react";

interface LocationInfoProps {
  location: {
    address: string;
    latLng: { lat: number; lng: number };
  };
}

const LocationInfo: React.FC<LocationInfoProps> = ({ location }) => {
  return (
    <div className="mt-4">
      <h3 className="text-xl font-semibold">Selected Location Information</h3>
      <p>
        <strong>Address:</strong> {location.address}
      </p>
      <p>
        <strong>Latitude:</strong> {location.latLng.lat}
      </p>
      <p>
        <strong>Longitude:</strong> {location.latLng.lng}
      </p>
    </div>
  );
};

export default LocationInfo;
