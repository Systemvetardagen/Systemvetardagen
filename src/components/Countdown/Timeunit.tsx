import React, { useEffect, useRef } from "react";
import "../../App.css";
import { triggerConfetti } from "../../utilities/confetti";
interface TimeUnitProps {
  value: number;
  label: string;
}

const Timeunit: React.FC<TimeUnitProps> = ({ value, label }) => {
  const positionRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (positionRef.current) {
      triggerConfetti(positionRef.current);
    }
  };
  // useEffect(() => {
  //   handleClick();
  // }, []);
  return (
    <div
      ref={positionRef}
      className="font-bold flex flex-col items-center cursor-pointer hover:scale-105 transition-all duration-100 text-white"
      onClick={handleClick}
    >
      <div className="text-4xl lg:text-7xl">
        {value.toString().padStart(2, "0")}{" "}
      </div>
      <div className="text-2xl lg:text-2xl">{label}</div>
    </div>
  );
};

export default Timeunit;
