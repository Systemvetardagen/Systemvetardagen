import React, { useState, useEffect, useRef } from "react";
import "@/app/App.css";
import { useTranslation } from "react-i18next";
import { triggerConfetti } from "@/lib/utilities/confetti";

interface CountdownProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTest: React.FC<CountdownProps> = ({ targetDate }) => {
  const [t] = useTranslation("landing");

  // jag e prompt engineer
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-15px); }
            }
            .float-animation {
                animation: float 3s ease-in-out infinite;
            }
            .float-delay-1 { animation-delay: 0s; }
            .float-delay-2 { animation-delay: 0.5s; }
            .float-delay-3 { animation-delay: 1s; }
            .float-delay-4 { animation-delay: 1.5s; }
        `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  function calculateTimeLeft(currentTimeMillis?: number): TimeLeft | null {
    const now = currentTimeMillis ?? new Date().getTime();
    const difference = targetDate.getTime() - now;
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return null;
  }

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(
    calculateTimeLeft()
  );

  useEffect(() => {
    const tickInterval = 25;
    const timer = setInterval(() => {
      const now = new Date().getTime();
      setTimeLeft(calculateTimeLeft(now));
    }, tickInterval);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return <div>See you there 😉</div>;
  }

  return (
    <div className="grid lg:flex grid-cols-2 gap-2 lg:gap-4 fadeUp justify-center select-none items-center">
      <Timeunit
        value={timeLeft.days}
        label={t("days")}
        animationClass="float-animation float-delay-1"
      />
      <Timeunit
        value={timeLeft.hours}
        label={t("hours")}
        animationClass="float-animation float-delay-2"
      />
      <Timeunit
        value={timeLeft.minutes}
        label={t("minutes")}
        animationClass="float-animation float-delay-3"
      />
      <Timeunit
        value={timeLeft.seconds}
        label={t("seconds")}
        animationClass="float-animation float-delay-4"
      />
    </div>
  );
};

interface TimeUnitProps {
  value: number;
  label: string;
  animationClass?: string;
}

const Timeunit: React.FC<TimeUnitProps> = ({
  value,
  label,
  animationClass = "",
}) => {
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
      className={`font-bold flex flex-col items-center cursor-pointer hover:scale-105 transition-all duration-100 text-white ${animationClass}`}
      onClick={handleClick}
    >
      <div className="relative flex items-center justify-center">
        <img
          src="/svgs/balloon.svg"
          className="w-16 h-24 md:w-20 md:h-28 lg:w-24 lg:h-32"
          alt=""
        />
        <div
          className="absolute inset-0 flex items-center justify-center text-lg md:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg"
          style={{ marginTop: "-60px" }}
        >
          {value.toString().padStart(2, "0")}
        </div>
      </div>
      <div className="text-sm md:text-base lg:text-lg mt-1">{label}</div>
    </div>
  );
};

export default CountdownTest;
