import React, { useState, useEffect, useRef } from 'react';
import '@/app/App.css';
import { useTranslation } from 'react-i18next';
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

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
    const [t] = useTranslation('landing');


    function calculateTimeLeft(currentTimeMillis?: number): TimeLeft | null {
        const now = currentTimeMillis ?? new Date().getTime();
        const difference = targetDate.getTime() - now;
        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return null;
    }

    const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft());

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
        <div
            className="grid gap-4 lg:flex lg:gap-20 grid-cols-2 fadeUp select-none"
        >
            <Timeunit value={timeLeft.days} label={t('days')} />
            <Timeunit value={timeLeft.hours} label={t('hours')} />
            <Timeunit value={timeLeft.minutes} label={t('minutes')} />
            <Timeunit value={timeLeft.seconds} label={t('seconds')} />
        </div>
    );
};

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
  return (
    <div
      ref={positionRef}
      className="font-bold flex flex-col items-center cursor-pointer hover:scale-105 transition-all duration-100 text-white"
      onClick={handleClick}
    >
      <div className="text-3xl lg:text-5xl font-semibold">
        {value.toString().padStart(2, "0")}{" "}
      </div>
      <div className="text-2xl lg:text-2xl">{label}</div>
    </div>
  );
};

export default Countdown;
