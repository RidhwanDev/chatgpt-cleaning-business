// src/components/HowItWorks.tsx
import React from "react";

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">How It Works</h2>
        <div className="grid grid-cols-4 gap-8">
          <div className="text-center">
            <img
              src="home.png"
              alt="Step 1"
              className="mx-auto mb-4 w-24 h-24 p-2"
            />
            <p>
              Fill in your booking details: location, date, time, and the number
              of rooms you need cleaned.
            </p>
          </div>
          <div className="text-center">
            <img
              src="checklist.png"
              alt="Step 2"
              className="mx-auto mb-4 w-24 h-24 p-2"
            />
            <p>Enter your personal details to submit the booking request.</p>
          </div>
          <div className="text-center">
            <img
              src="waiting.png"
              alt="Step 3"
              className="mx-auto mb-4 w-24 h-24 p-2"
            />
            <p>
              We will review your booking and send you a confirmation email
              within 24 hours to confirm the booking.
            </p>
          </div>
          <div className="text-center">
            <img
              src="broom.png"
              alt="Step 4"
              className="mx-auto mb-4 w-24 h-24 p-2"
            />
            <p>
              Our professional cleaning team will arrive at your location on the
              scheduled date and time to perform the cleaning service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
