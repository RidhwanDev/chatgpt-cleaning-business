// src/components/RoomCounter.tsx
import React from "react";

interface RoomCounterProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const RoomCounter: React.FC<RoomCounterProps> = ({
  count,
  onIncrement,
  onDecrement,
}) => {
  return (
    <div className="flex items-center justify-center">
      <button
        onClick={onDecrement}
        className="bg-red-500 text-white font-bold py-2 px-4 rounded-l"
        disabled={count === 1}
      >
        -
      </button>
      <div className="border-t border-b border-gray-300 px-4 py-2">
        <span className="text-xl font-semibold">{count}</span>
      </div>
      <button
        onClick={onIncrement}
        className="bg-green-500 text-white font-bold py-2 px-4 rounded-r"
      >
        +
      </button>
    </div>
  );
};

export default RoomCounter;
