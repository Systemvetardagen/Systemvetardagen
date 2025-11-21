import { useTranslation } from "react-i18next";
import Seperator from "../common/Seperator";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { triggerConfetti } from "@/lib/utilities/confetti";

const Footer = () => {
  const [t] = useTranslation("footer");
  const targetDate = new Date("2026-02-18T10:00:00");
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  const sections = t("sections", { returnObjects: true }) as {
    information: {
      title: string;
      description: string;
      studentUnion: { label: string; url: string };
      navigation: { companies: string; visitor: string; about: string };
      contact: { label: string; email: string };
    };
    socials: {
      title: string;
      description: string;
      platforms: {
        facebook: { label: string; url: string };
        instagram: { label: string; url: string };
        linkedin: { label: string; url: string };
      };
      countdown: {
        prefix: string;
        days: string;
        hours: string;
        minutes: string;
        seconds: string;
        suffix: string;
        ongoing: { prefix: string; message: string };
      };
    };
    location: {
      title: string;
      address: string;
      mapUrl: string;
      embedUrl: string;
    };
  };

  const logo = t("logo", { returnObjects: true }) as {
    alt: string;
    src: string;
  };

  const copyright = t("copyright") as string;

  function getTimeLeft() {
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();

    if (diff <= 0) return null;

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const positionRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (positionRef.current) {
      triggerConfetti(positionRef.current);
    }
  };

  return (
    <footer className="bg-white w-full">
      <Seperator />
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 text-black">
          <style>
            {`
            .instagram-hover:hover {
              fill: url(#instagramGradient);
            }
          `}
          </style>

          {/* Information Section */}
          <div className="text-left">
            <h3 className="text-lg font-semibold pb-2">
              {sections.information.title}
            </h3>
            <p className="text-xs max-w-md mb-2">
              {sections.information.description}
            </p>
            <div className="flex flex-col gap-2 [&>a]:hover:text-link">
              <a
                className="text-sm hover:text-black transition-colors"
                href={sections.information.studentUnion.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {sections.information.studentUnion.label}
              </a>
              <Link
                className="text-sm hover:text-black transition-colors"
                to="/companies"
              >
                {sections.information.navigation.companies}
              </Link>
              <Link
                className="text-sm hover:text-black transition-colors"
                to="/visit-info"
              >
                {sections.information.navigation.visitor}
              </Link>
              <Link
                className="text-sm hover:text-black transition-colors"
                to="/about"
              >
                {sections.information.navigation.about}
              </Link>
              <p className="text-sm mb-1">
                {sections.information.contact.label}{" "}
                <a
                  className="text-sm text-link hover:underline"
                  href={`mailto:${sections.information.contact.email}`}
                >
                  {sections.information.contact.email}
                </a>
              </p>
            </div>
          </div>

          {/* Socials Section */}
          <div className="text-left">
            <h3 className="text-lg font-semibold pb-2">
              {sections.socials.title}
            </h3>
            <p className="text-xs max-w-md mb-2">
              {sections.socials.description}
            </p>
            <div className="flex gap-3 py-2">
              <a
                href={sections.socials.platforms.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={sections.socials.platforms.facebook.label}
                className="transition-transform hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="36px"
                  height="36px"
                  className="text-gray-900 hover:text-blue-600 transition-colors"
                  fill="currentColor"
                >
                  <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z" />
                </svg>
              </a>
              <a
                href={sections.socials.platforms.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={sections.socials.platforms.instagram.label}
                className="transition-transform hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="36px"
                  height="36px"
                  className="text-gray-900 hover:text-pink-600 w-9 h-9"
                  fill="currentColor"
                >
                  {/* <defs>
                    <linearGradient
                      id="instagramGradient"
                      x1="0.7"
                      y1="0"
                      x2="0.3"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#dd2a7b" />
                      <stop offset="25%" stopColor="#515bd4" />
                      <stop offset="30%" stopColor="#8134af" />
                      <stop offset="60%" stopColor="#dd2a7b" />
                      <stop offset="100%" stopColor="#f58529" />
                    </linearGradient>
                  </defs> */}
                  <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z" />
                </svg>
              </a>
              <a
                href={sections.socials.platforms.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={sections.socials.platforms.linkedin.label}
                className="transition-transform hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="36px"
                  height="36px"
                  className="text-gray-900 hover:text-sky-700 transition-colors"
                  fill="currentColor"
                >
                  <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z" />
                </svg>
              </a>
            </div>

            <div
              className="pt-4 cursor-pointer max-w-md select-none"
              ref={positionRef}
              onClick={handleClick}
            >
              {timeLeft ? (
                <div className="hover:scale-105 transition-transform duration-200">
                  <p className="text-sm">{sections.socials.countdown.prefix}</p>
                  <p className="font-bold">
                    {timeLeft.days} {sections.socials.countdown.days},{" "}
                    {timeLeft.hours} {sections.socials.countdown.hours},{" "}
                    {timeLeft.minutes} {sections.socials.countdown.minutes}
                  </p>
                  <p className="font-bold">
                    {sections.socials.countdown.suffix} {timeLeft.seconds}{" "}
                    {sections.socials.countdown.seconds}!
                  </p>
                </div>
              ) : (
                <div className="hover:scale-105 transition-transform duration-200">
                  <p className="text-sm">
                    {sections.socials.countdown.ongoing.prefix}
                  </p>
                  <p className="font-bold">
                    {sections.socials.countdown.ongoing.message}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Location Section */}
          <div className="text-left lg:text-center">
            <h3 className="text-lg pb-2 font-semibold">
              {sections.location.title}
            </h3>
            <a
              href={sections.location.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block pb-3 text-sm hover:text-black transition-colors"
            >
              {sections.location.address}
            </a>
            <iframe
              src={sections.location.embedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              title="Location map"
              className="rounded-3xl w-full h-48 sm:h-56 lg:w-80 lg:h-48 border-0 lg:mx-auto"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          <img
            src={logo.src}
            alt={logo.alt}
            className="h-8 sm:h-10"
            fetchPriority="high"
          />
          <p className="text-xs sm:text-sm text-gray-700">{copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
