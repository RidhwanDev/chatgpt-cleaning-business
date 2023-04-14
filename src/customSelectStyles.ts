// src/customSelectStyles.ts
import { StylesConfig } from "react-select";

export const customStyles: StylesConfig = {
  control: (provided) => ({
    ...provided,
    borderRadius: "0.25rem",
    borderColor: "#e2e8f0",
    boxShadow: "none",
    "&:hover": {
      borderColor: "#a0aec0",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "#3182ce"
      : state.isFocused
      ? "#edf2f7"
      : "#fff",
    color: state.isSelected ? "#fff" : "#4a5568",
    cursor: "pointer",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#4a5568",
  }),
  input: (provided) => ({
    ...provided,
    color: "#4a5568",
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "0.25rem",
    borderColor: "#e2e8f0",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
  }),
};
