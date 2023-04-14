// src/components/LocationPicker.tsx
import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

interface LocationPickerProps {
  onLocationSelect: (
    address: string,
    latLng: { lat: number; lng: number }
  ) => void;
}

const LocationPicker: React.FC<LocationPickerProps> = ({
  onLocationSelect,
}) => {
  const [address, setAddress] = useState("");

  const handleChange = (newAddress: string) => {
    setAddress(newAddress);
  };

  const handleSelect = async (selectedAddress: string) => {
    setAddress(selectedAddress);
    try {
      const results = await geocodeByAddress(selectedAddress);
      const latLng = await getLatLng(results[0]);
      onLocationSelect(selectedAddress, latLng);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="w-full">
      <PlacesAutocomplete
        value={address}
        onChange={handleChange}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="relative">
            <input
              {...getInputProps({
                placeholder: "Enter your postcode...",
                className: "w-full p-2 border border-gray-300 rounded",
              })}
            />
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow">
              {loading && <div className="p-2 text-gray-500">Loading...</div>}
              {suggestions.map((suggestion) => {
                const style = suggestion.active
                  ? {
                      backgroundColor: "#f5f5f5",
                      cursor: "pointer",
                    }
                  : {
                      backgroundColor: "#ffffff",
                      cursor: "pointer",
                    };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, { style })}
                    key={suggestion.placeId}
                    className="p-2"
                  >
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
};

export default LocationPicker;
