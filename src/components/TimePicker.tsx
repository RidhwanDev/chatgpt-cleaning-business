// src/components/TimePicker.tsx
import React from "react";
import Select from "react-select";
import { customStyles } from "../customSelectStyles";

interface TimePickerProps {
  selectedTime: string | null;
  onChange: (time: string) => void;
}

interface TimeOption {
  value: string;
  label: string;
}

const timeOptions: TimeOption[] = Array.from({ length: 24 * 4 }, (_, i) => {
  const hours = Math.floor(i / 4);
  const minutes = (i % 4) * 15;
  const label = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}`;
  return { value: label, label };
});

const CustomTimePicker: React.FC<TimePickerProps> = ({
  selectedTime,
  onChange,
}) => {
  const selectedOption = selectedTime
    ? timeOptions.find((option) => option.value === selectedTime)
    : null;

  const handleChange = (option: TimeOption) => {
    const timeOption = option as TimeOption;
    onChange(timeOption.value);
  };

  return (
    <div className="w-full">
      <Select
        value={selectedOption}
        onChange={(newValue) => handleChange(newValue as TimeOption)}
        options={timeOptions}
        styles={customStyles}
      />
    </div>
  );
};

export default CustomTimePicker;
