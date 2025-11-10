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
      className="flex flex-col md:flex-row gap-8 md:gap-20 py-4 md:py-10"
    >
      {imagePosition === "left" && (
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      )}
      <div className="w-full md:w-1/2 flex flex-col gap-1 justify-center text-center order-1 md:order-2">
        <h2 className="text-3xl md:text-4xl font-bold">{t(titleKey)}</h2>
        <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          {t(bodyKey)}
        </p>
        {linkTo && linkTextKey && (
          <div className="my-4">
            <Link to={linkTo}>
              <Button variant="plain" size="lg" className="rounded-full">
                {t(linkTextKey)}
              </Button>
            </Link>
          </div>
        )}
      </div>
      {imagePosition === "right" && (
        <div className="w-full md:w-1/2 order-2">
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
    <div className="w-full flex flex-col gap-4">
      <div className="w-full h-0.5 bg-gray-400/30"></div>
      <InfoSection
        imagePosition="left"
        imageSrc="/images/crowded.webp"
        imageAlt="Systemvetardagen 30th Anniversary"
        titleKey="body.infoSections.anniversary.title"
        bodyKey="body.infoSections.anniversary.body"
        // linkTo="/anniversary"
        linkTextKey="body.infoSections.anniversary.link"
      />
      <InfoSection
        imagePosition="right"
        imageSrc="/images/nod.webp"
        imageAlt="Systemvetardagen Meet"
        titleKey="body.infoSections.meet.title"
        bodyKey="body.infoSections.meet.body"
        linkTo="https://mitt.systemvetardagen.se"
        linkTextKey="body.infoSections.meet.link"
      />
      <InfoSection
        imagePosition="left"
        imageSrc="/images/workers.jpg"
        imageAlt="Become a Fair'ie"
        titleKey="body.infoSections.fairie.title"
        bodyKey="body.infoSections.fairie.body"
        linkTo="https://forms.office.com/pages/responsepage.aspx?id=-d6Dd48OpkmgDUGVg8iFYw0XRXYagRNBnDGOWJUt59hUQUFDM0xOWTI2RlYyUDNFNlE5WDZVTFFKTS4u&route=shorturl"
        linkTextKey="body.infoSections.fairie.link"
      />
      <div className="w-full h-0.5 bg-gray-400/30"></div>
    </div>
  );
};

export default InfoSections;
