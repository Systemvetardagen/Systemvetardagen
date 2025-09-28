import React from "react";
import { useTranslation } from "react-i18next";
import { SignupLink, Partners, FadeInSection } from "@/ui";
import { LuTramFront, LuSquareParking } from "react-icons/lu";
import { CiLink } from "react-icons/ci";
interface Lecture {
  company: string;
  time: string;
  topic: string;
  location: string;
  note?: string;
  speaker?: string;
  speakers?: string[];
}

interface LectureItemProps {
  lecture: Lecture;
}

const LectureItem: React.FC<LectureItemProps> = ({ lecture }) => {
  return (
    <FadeInSection
      direction="fadeLeft"
      className="mb-5 border-b border-white/10 pb-4 last:border-0"
    >
      <div className="flex flex-col text-left">
        {/* Desktop view */}
        {/* what the ai ._. */}
        <div className="hidden md:flex items-start gap-3">
          <div className="bg-gradient-to-r from-primary/20 to-transparent px-2 py-1 rounded-lg w-[90px] text-center shrink-0">
            <p className="text-sm text-white font-medium">{lecture.time}</p>
          </div>
          <div className="flex-1">
            <h1 className="font-semibold text-xl md:text-2xl">
              {lecture.company}
            </h1>
            <p className="text-sm md:text-md text-white/90 font-medium">
              {lecture.topic}
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-1 text-xs md:text-sm text-white/70">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 mr-1 text-primary"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                {lecture.location}
              </div>

              {(lecture.speaker || lecture.speakers) && (
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 mr-1 text-primary"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {lecture.speaker || lecture.speakers?.join(", ")}
                </div>
              )}
            </div>

            {lecture.note && (
              <div className="bg-white/5 rounded-md p-2 mt-1 max-w-md">
                <p className="text-xs text-white/80 italic">{lecture.note}</p>
              </div>
            )}
          </div>
        </div>

        {/* Mobile view */}
        <div className="flex flex-col md:hidden">
          <div className="bg-gradient-to-r from-primary/20 to-transparent px-2 py-1 rounded-lg w-fit mb-1">
            <p className="text-xs text-white font-medium">{lecture.time}</p>
          </div>
          <h1 className="font-semibold text-lg">{lecture.company}</h1>
          <p className="text-sm text-white/90 font-medium">{lecture.topic}</p>

          <div className="flex flex-wrap items-center gap-2 mt-1 text-xs text-white/70">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 mr-1 text-primary"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              {lecture.location}
            </div>

            {(lecture.speaker || lecture.speakers) && (
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 mr-1 text-primary"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
                {lecture.speaker || lecture.speakers?.join(", ")}
              </div>
            )}
          </div>

          {lecture.note && (
            <div className="bg-white/5 rounded-md p-2 mt-1">
              <p className="text-xs text-white/80 italic">{lecture.note}</p>
            </div>
          )}
        </div>
      </div>
    </FadeInSection>
  );
};

const Events: React.FC = () => {
  const [t] = useTranslation("lectures");
  const lectures: Lecture[] = t("lectures", {
    returnObjects: true,
  }) as Lecture[];

  return (
    <section
      id="events"
      className="w-full tracking-wider gradient-background flex flex-col gap-4 py-6 my-8 text-white rounded-3xl items-center fadeLeft"
    >
      <h1 className="text-2xl lg:text-3xl font-light">{t("header")}</h1>
      <h2 className="text-lg lg:text-xl w-3/4 font-light">{t("sub-header")}</h2>
      <div className="w-5/6">
        {lectures.map((lecture: Lecture, index) => (
          <LectureItem key={index} lecture={lecture} />
        ))}
      </div>
    </section>
  );
};

const VisitInfo: React.FC = () => {
  const [t] = useTranslation("visitInfo");
  return (
    <div className="w-full overflow-x-hidden flex flex-col items-center bg-background text-center mb-10">
      <div className="w-full h-[20vh] lg:h-[40vh] max-h-[400px] overflow-hidden">
        <img
          src="/images/nod.webp"
          alt=""
          className="object-cover w-full h-full object-[50%_70%]"
        />
      </div>
      <section className="flex flex-col items-center max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-bold text-2xl lg:text-4xl mt-10 fadeLeft">
          {t("header")}
        </h1>
        <p className="text-gray-500 font-light mx-8 fadeRight">
          {t("sub-header")}
        </p>
        {/* <Events /> */}
        <a id="map" href="/svgs/floormap.svg" className="mt-10">
          <img
            className="w-full rounded-3xl"
            src="/svgs/floormap.svg"
            alt="Floor map"
          />
        </a>
        <section id="get-here" className="w-full text-start my-8 ">
          <h2 className="font-light text-3xl mb-2">{t("getting-to.header")}</h2>
          <div className="mb-4">
            <div className="flex items-center gap-2">
              <LuTramFront size={20} />
              <h2 className="text-xl">{t("getting-to.metro.header")}</h2>
              <a
                className="text-link flex gap-1 items-center"
                href="https://sl.se/?timeType=NOW&destPlaceId=OTA5MTAwMTAwMDAwOTMwMg%3D%3D&origPlaceId=OTA5MTAwMTAwMTAwOTAwMQ%3D%3D&destName=Kista+%28Stockholm%29&origName=Tcentralen+%28Stockholm%29&transportTypes=%5B%22METRO%22%2C%22TRAIN%22%2C%22TRAM%22%2C%22SHIP%22%2C%22BUS%22%2C%22LOCALBUS%22%5D"
                rel="nofollow"
                target="_blank"
              >
                Tcentralen → Kista
                <CiLink size={30} />
              </a>
            </div>
            <p className="text-pretty font-light font-ibm">
              {t("getting-to.metro.body")}
            </p>
          </div>
          <div className="mb-4">
            <div className="flex items-center gap-2">
              <LuSquareParking size={20} />
              <h2 className="text-xl">{t("getting-to.parking.header")}</h2>
            </div>
            <p className="text-pretty font-light font-ibm">
              {t("getting-to.parking.body")}
            </p>
          </div>
        </section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d927.2724538117486!2d17.94447928059294!3d59.40656019752912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9eed05efbb67%3A0x18ac39c13897c4a9!2sDSV%2C%20Institutionen%20f%C3%B6r%20data-%20och%20systemvetenskap!5e0!3m2!1ssv!2sse!4v1738844966811!5m2!1ssv!2sse"
          width="100%"
          height="500px"
          loading="lazy"
          className="rounded-3xl"
        ></iframe>
        <Partners />
      </section>
    </div>
  );
};

export default VisitInfo;
