import { useRef, useState, useEffect } from "react";
import Fireworks, { type FireworksHandlers } from "@fireworks-js/react";
import { SplitText } from "../common";
import Countdown from "@/components/common/Countdown/Countdown";
import { useTranslation } from "react-i18next";
import { FadeInSection } from "../layout";
import { celebrate } from "@/lib/utilities/confetti";

const Hero = () => {
  // const targetDate: Date = new Date("2026-02-13T15:00:00+01:00"); // Test
  const targetDate: Date = new Date("2026-02-18T10:00:00+01:00"); // Production
  
  const ref = useRef<FireworksHandlers>(null);
  const [t] = useTranslation("landing");
  const [isCountdownComplete, setIsCountdownComplete] = useState(false);

  useEffect(() => {
    const checkCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;
      setIsCountdownComplete(difference <= 0);
    };

    checkCountdown();
    const interval = setInterval(checkCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div
      id="hero"
      className="min-h-[600px] md:min-h-[700px] w-full relative gradient-background flex flex-col text-white md:flex-row items-center justify-center px-4 md:px-20"
    >
      <Fireworks
        ref={ref}
        options={{
          opacity: 0.5,
          explosion: 10,
          intensity: 5,
          lineWidth: { explosion: { min: 0.5, max: 1 } },
        }}
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "700px",
          position: "absolute",
        }}
      />
      <div className="flex flex-col z-10 text-center items-center ">
        <FadeInSection direction="fadeRight" duration={1000}>
          <h2
            className="text-2xl md:text-4xl font-semibold mb-1"
            onClick={celebrate}
          >
            {t("subHeader")}
          </h2>
        </FadeInSection>
        <SplitText
          text={t("header")}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-10 overflow-visible"
          delay={50}
          duration={0.7}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          textAlign="center"
        ></SplitText>
        <Countdown targetDate={targetDate} />

        <FadeInSection direction="fadeUp" duration={1000} delay={1000}>
          <h3 className="md:text-2xl mt-10">
            <a
              href="https://maps.app.goo.gl/qf3VPrddNHJzNX7M7"
              rel="noreferrer nofollow"
              target="_blank"
              className="hover:text-gray-200 inline-block transition-transform duration-150 hover:scale-102"
            >
              Kista Nod, Borgarfjordsgatan 12
            </a>
          </h3>
          <h3 className="md:text-2xl">
            {t("date.day")} {targetDate.getDate()} {t("date.month")} 10:00 -
            16:00
          </h3>
        </FadeInSection>
        {isCountdownComplete && (
          <FadeInSection direction="fadeUp">
            <a
              href="/svgs/floormap.svg"
              className="inline-block mt-6 px-8 py-3 text-lg rounded-full border-2 border-white bg-transparent hover:bg-white/10 transition-colors"
            >
              {t("viewMap")}
            </a>
          </FadeInSection>
        )}
      </div>
    </div>
  );
};

export default Hero;
