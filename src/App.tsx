// src/App.tsx
import React, { useState } from "react";
import Header from "./components/Header";
import BookingForm from "./components/BookingForm";
import LocationInfo from "./components/LocationInfo";
import "./App.css";
import HowItWorks from "./components/HowItWorks";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<{
    address: string;
    latLng: { lat: number; lng: number };
  } | null>(null);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLocationSelect = (
    address: string,
    latLng: { lat: number; lng: number }
  ) => {
    setSelectedLocation({ address, latLng });
  };

  return (
    <div className="App">
      <Header scrollToSection={scrollToSection} />
      <section
        id="booking"
        className="bg-blue-200 min-h-screen flex items-center justify-center"
      >
        <div className="w-full max-w-2xl px-4">
          <BookingForm onLocationSelect={handleLocationSelect} />
          {selectedLocation && <LocationInfo location={selectedLocation} />}
        </div>
      </section>
      <HowItWorks />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default App;
