// src/components/BookingForm.tsx
import React, { useState } from "react";
import LocationPicker from "./LocationPicker";
import DatePicker from "./DatePicker";
import CustomTimePicker from "./TimePicker";
import RoomCounter from "./RoomCounter";
import PersonalDetailsForm from "./PersonalDetailsForm";
import { CSSTransition } from "react-transition-group";
import "../bookingFormTransition.css";

interface BookingFormProps {
  onLocationSelect: (
    address: string,
    latLng: { lat: number; lng: number }
  ) => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ onLocationSelect }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [roomCount, setRoomCount] = useState(1);
  const [showPersonalDetailsForm, setShowPersonalDetailsForm] = useState(false);

  const handleClick = () => {
    setShowPersonalDetailsForm(true);
  };

  const handleSubmit = () => {
    // Handle form submission here
  };

  return (
    <div>
      <h2 className="text-4xl font-bold mb-4">Book a Cleaning Service</h2>
      <CSSTransition
        in={!showPersonalDetailsForm}
        timeout={300}
        classNames="slide"
        unmountOnExit
      >
        <div>
          <LocationPicker onLocationSelect={onLocationSelect} />
          <div className="mt-4 flex">
            <div className="w-1/2 pr-2">
              <label htmlFor="date-picker" className="block mb-2">
                Choose a date:
              </label>
              <DatePicker
                selectedDate={selectedDate}
                onChange={(date: Date) => setSelectedDate(date)}
              />
            </div>
            <div className="w-1/2 pl-2">
              <label htmlFor="time-picker" className="block mb-2">
                Choose a time:
              </label>
              <CustomTimePicker
                selectedTime={selectedTime}
                onChange={(time: string) => setSelectedTime(time)}
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="room-counter" className="block mb-2">
              Number of rooms:
            </label>
            <RoomCounter
              count={roomCount}
              onIncrement={() => setRoomCount(roomCount + 1)}
              onDecrement={() => setRoomCount(roomCount - 1)}
            />
          </div>
          <button
            type="button"
            onClick={handleClick}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Book now
          </button>
        </div>
      </CSSTransition>
      <CSSTransition
        in={showPersonalDetailsForm}
        timeout={300}
        classNames="slide"
        unmountOnExit
      >
        <PersonalDetailsForm onSubmit={handleSubmit} />
      </CSSTransition>
    </div>
  );
};

export default BookingForm;
