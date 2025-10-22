import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FadeInSection } from "../layout";
import { Button } from "../common";

interface InfoSectionProps {
  imagePosition: "left" | "right";
  imageSrc: string;
  imageAlt: string;
  titleKey: string;
  bodyKey: string;
  linkTo?: string;
  linkTextKey?: string;
}

const InfoSection = ({
  imagePosition,
  imageSrc,
  imageAlt,
  titleKey,
  bodyKey,
  linkTo,
  linkTextKey,
}: InfoSectionProps) => {
  const [t] = useTranslation("landing");

  return (
    <FadeInSection
      direction={imagePosition === "left" ? "fadeRight" : "fadeLeft"}
      className="flex flex-col md:flex-row gap-6 md:gap-10 items-center"
    >
      {imagePosition === "left" && (
        <div className="w-full md:w-1/2">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      )}
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
          {t(titleKey)}
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          {t(bodyKey)}
        </p>
        {linkTo && linkTextKey && (
          <div className="mt-2">
            <Link to={linkTo}>
              <Button variant="default" size="lg">
                {t(linkTextKey)}
              </Button>
            </Link>
          </div>
        )}
      </div>
      {imagePosition === "right" && (
        <div className="w-full md:w-1/2">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      )}
    </FadeInSection>
  );
};

const InfoSections = () => {
  return (
    <div className="w-full flex flex-col gap-28">
      <InfoSection
        imagePosition="left"
        imageSrc="/images/2024logoWithShirt.webp"
        imageAlt="Systemvetardagen 30th Anniversary"
        titleKey="body.infoSections.anniversary.title"
        bodyKey="body.infoSections.anniversary.body"
        // linkTo="/anniversary"
        linkTextKey="body.infoSections.anniversary.link"
      />

      <InfoSection
        imagePosition="right"
        imageSrc="/images/auditorium-seats.webp"
        imageAlt="Systemvetardagen Meet"
        titleKey="body.infoSections.meet.title"
        bodyKey="body.infoSections.meet.body"
        linkTo="https://mitt.systemvetardagen.se"
        linkTextKey="body.infoSections.meet.link"
      />
{/* 
      <InfoSection
        imagePosition="left"
        imageSrc="/images/nod.webp"
        imageAlt="Management Team"
        titleKey="body.infoSections.management.title"
        bodyKey="body.infoSections.management.body"
      /> */}
    </div>
  );
};

export default InfoSections;
