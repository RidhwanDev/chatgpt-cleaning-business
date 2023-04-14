// src/components/PersonalDetailsForm.tsx
import React, { useState } from "react";

interface PersonalDetailsFormProps {
  onSubmit: () => void;
}

const PersonalDetailsForm: React.FC<PersonalDetailsFormProps> = ({
  onSubmit,
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <form>
      <div className="mt-4 flex">
        <div className="w-1/2 pr-2">
          <label htmlFor="first-name" className="block mb-2">
            First Name:
          </label>
          <input
            id="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full bg-white text-black border border-gray-300 rounded py-2 px-4"
          />
        </div>
        <div className="w-1/2 pl-2">
          <label htmlFor="last-name" className="block mb-2">
            Last Name:
          </label>
          <input
            id="last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full bg-white text-black border border-gray-300 rounded py-2 px-4"
          />
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="email" className="block mb-2">
          Email:
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-white text-black border border-gray-300 rounded py-2 px-4"
        />
      </div>
      <div className="mt-4">
        <label htmlFor="phone-number" className="block mb-2">
          Phone Number:
        </label>
        <input
          id="phone-number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full bg-white text-black border border-gray-300 rounded py-2 px-4"
        />
      </div>
      <button
        type="button"
        onClick={onSubmit}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Submit
      </button>
    </form>
  );
};

export default PersonalDetailsForm;
