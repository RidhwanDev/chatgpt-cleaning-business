// src/components/DatePicker.tsx
import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.css";

interface DatePickerProps {
  selectedDate: Date | null;
  onChange: (date: Date) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ selectedDate, onChange }) => {
  return (
    <div className="w-full">
      <ReactDatePicker
        selected={selectedDate}
        onChange={(date: Date) => onChange(date)}
        dateFormat="yyyy/MM/dd"
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>
  );
};

export default DatePicker;
