import React, { useState, useEffect, useRef } from "react";
import "@/app/App.css";
import { useTranslation } from "react-i18next";
import { triggerConfetti } from "@/lib/utilities/confetti";
import "./countdown.css";
import { FadeInSection } from "@/components/layout";

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
  const [t] = useTranslation("landing");

  function calculateTimeLeft(currentTimeMillis?: number): TimeLeft {
    const now = currentTimeMillis ?? new Date().getTime();
    const difference = targetDate.getTime() - now;
    const absDifference = Math.abs(difference);
    
    return {
      days: Math.floor(absDifference / (1000 * 60 * 60 * 24)) * (difference < 0 ? -1 : 1),
      hours: Math.floor((absDifference / (1000 * 60 * 60)) % 24) * (difference < 0 ? -1 : 1),
      minutes: Math.floor((absDifference / (1000 * 60)) % 60) * (difference < 0 ? -1 : 1),
      seconds: Math.floor((absDifference / 1000) % 60) * (difference < 0 ? -1 : 1),
    };
  }

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
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

  // const fairEndDate = new Date("2026-02-13T12:05:00+01:00"); // Test
  // const dayAfterFair = new Date("2026-02-13T18:20:00+01:00"); // Test
  const fairEndDate = new Date("2026-02-18T16:00:00+01:00"); // Production
  const dayAfterFair = new Date("2026-02-19T00:00:00+01:00"); // Production
  const now = new Date().getTime();

  if (now >= dayAfterFair.getTime()) {
    return (
      <FadeInSection direction="fadeUp" duration={800}>
        <div className="text-3xl md:text-5xl font-semibold">{t("seeYouNextYear")}</div>
      </FadeInSection>
    );
  }

  if (now >= fairEndDate.getTime()) {
    return (
      <FadeInSection direction="fadeUp" duration={800}>
        <div className="text-3xl md:text-5xl font-semibold">{t("seeYouAtFooBar")}</div>
      </FadeInSection>
    );
  }

  // If countdown has started (negative time), show good luck message
  if (timeLeft.days < 0 || timeLeft.hours < 0 || timeLeft.minutes < 0 || timeLeft.seconds < 0) {
    return (
      <FadeInSection direction="fadeUp" duration={800}>
        <div className="text-3xl md:text-5xl font-semibold">{t("goodLuck")}</div>
      </FadeInSection>
    );
  }

  return (
    <div className="grid gap-4 sm:flex lg:gap-20 grid-cols-2 select-none">
      <FadeInSection direction="fadeUp" delay={800}>
        <Timeunit value={timeLeft.days} label={t("days")} />
      </FadeInSection>
      <FadeInSection direction="fadeUp" delay={700}>
        <Timeunit value={timeLeft.hours} label={t("hours")} />
      </FadeInSection>
      <FadeInSection direction="fadeUp" delay={600}>
        <Timeunit value={timeLeft.minutes} label={t("minutes")} />
      </FadeInSection>
      <FadeInSection direction="fadeUp" delay={500}>
        <Timeunit value={timeLeft.seconds} label={t("seconds")} />
      </FadeInSection>
    </div>
  );
};

interface TimeUnitProps {
  value: number;
  label: string;
}

const Timeunit: React.FC<TimeUnitProps> = ({ value, label }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .catch((err) => console.log("Playback prevented:", err));
    }
  };
  const [timesPressed, setTimesPressed] = useState(0);

  const positionRef = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    if (timesPressed === 10) {
      console.log("Will something happen if you click 50 times?");
    }
    setTimesPressed(timesPressed + 1);
    if (timesPressed === 50 && positionRef.current) {
      playSound();
      triggerConfetti(positionRef.current, true);
    }
    if (positionRef.current) {
      triggerConfetti(positionRef.current);
    }
  };
  
  return (
    <div className="flex flex-col">
      <span
        ref={positionRef}
        onClick={handleClick}
        className="text-4xl sm:text-6xl countdown font-bold flex flex-col items-center cursor-pointer hover:animate-shake transition-all duration-100 "
      >
        <span
          style={{ "--value": value } as React.CSSProperties}
          aria-live="polite"
          aria-label={value.toString()}
        >
          {value}
        </span>
      </span>
      <audio ref={audioRef} src="nuke.mp3" preload="auto" />
      <div className="text-xl sm:text-2xl font-bold">{label}</div>
    </div>
  );
};

export default Countdown;
