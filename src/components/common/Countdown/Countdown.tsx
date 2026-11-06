import React, { useState, useEffect, useRef } from "react";
import "@/app/App.css";
import { useTranslation } from "react-i18next";
import { triggerConfetti } from "@/lib/utilities/confetti";
import "./countdown.css";
import { FadeInSection } from "@/components/layout";

import { getFairState, getTimeUntilFair } from "@/lib/event";

const Countdown: React.FC = () => {
  const [t] = useTranslation("landing");
  const [now, setNow] = useState(Date.now);
  const timeLeft = getTimeUntilFair(now);
  const fairState = getFairState(now);

  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (fairState !== "upcoming") {
    const message = fairState === "ongoing" ? "goodLuck"
      : fairState === "evening" ? "seeYouAtFooBar" : "seeYouNextYear";
    return (
      <FadeInSection direction="fadeUp" duration={800}>
        <div className="text-3xl md:text-5xl font-semibold">{t(message)}</div>
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
