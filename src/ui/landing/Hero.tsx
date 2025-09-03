import { useEffect, useRef } from "react";
import Fireworks, { type FireworksHandlers } from "@fireworks-js/react";
import { Countdown, SplitText } from "../common";
import { useTranslation } from "react-i18next";
import { FadeInSection } from "../layout";
import { celebrate } from "@/lib/utilities/confetti";

const Hero = () => {
  const targetDate: Date = new Date("2026-03-18T10:00:00+01:00");
  const ref = useRef<FireworksHandlers>(null);
  const [t] = useTranslation("landing");

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (ref.current) {
  //       ref.current.waitStop();
  //     }
  //   }, 1500);
  // }, []);



  return (
    <div
      id="hero"
      className="min-h-[600px] md:min-h-[700px] w-screen relative gradient-background flex flex-col text-white md:flex-row items-center justify-center font-poppins  px-4 md:px-20"
    >
      <Fireworks
        ref={ref}
        options={{
          opacity: 0.5,
          explosion: 10,
          intensity: 5,
          lineWidth: { explosion: { min: 0.5, max:1 } },
        }}
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "700px",
          position: "absolute",
        }}
      />
      <div className="flex flex-col z-10 text-center ">
        <FadeInSection direction="fadeRight">
          <h2
            className="text-2xl md:text-4xl font-semibold mb-1"
            onClick={celebrate}
          >
            {t("subHeader")}
          </h2>
        </FadeInSection>
        <SplitText
          text={t("header")}
          className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-10 overflow-visible"
          delay={70}
          duration={1}
          ease="elastic.out(1, 0.3)"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          textAlign="center"
        ></SplitText>
        <Countdown targetDate={targetDate} />
        <FadeInSection direction="fadeLeft">
          <h3 className="md:text-2xl mt-10">Kista Nod, Borgarfjordsgatan 12</h3>
          <h3 className="md:text-2xl">
            {t("date.day")} {targetDate.getDate()} {t("date.month")} 10:00 -
            16:00
          </h3>
        </FadeInSection>
      </div>
    </div>
  );
};

export default Hero;
