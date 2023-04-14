// src/components/AboutUs.tsx
import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section id="about-us" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="mb-8">
          We are two brothers who started this cleaning business with the goal
          of providing the best possible service in London. We take each job
          very seriously and pay close attention to detail, ensuring our clients
          receive the highest level of satisfaction.
        </p>
        <div className="grid grid-cols-2 gap-8">
          <div className="text-center">
            <img
              src="johndoe.jpg"
              alt="Brother 1"
              className="mx-auto mb-4 w-48 h-48 rounded-full"
            />
            <h3 className="text-2xl font-semibold mb-2">John Doe</h3>
            <p>
              John is passionate about providing excellent customer service and
              enjoys the challenge of tackling complex cleaning tasks. In his
              free time, John loves to explore the outdoors, try new foods, and
              spend time with his family.
            </p>
          </div>
          <div className="text-center">
            <img
              src="jamesdoe.jpg"
              alt="Brother 2"
              className="mx-auto mb-4 w-48 h-48 rounded-full"
            />
            <h3 className="text-2xl font-semibold mb-2">James Doe</h3>
            <p>
              James has a keen eye for detail and is committed to maintaining a
              high standard of cleanliness. Outside of work, James enjoys
              playing sports, reading about history, and traveling to new
              places.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
