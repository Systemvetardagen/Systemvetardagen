import { Trans, useTranslation } from "react-i18next";

const Anniversary = () => {
  const [t] = useTranslation("landing");
  return (
    <div id="30" className="flex flex-col gap-2 md:max-w-[80%]">
      <h2 className="text-2xl md:text-4xl font-semibold">
        {t("body.anniversary.header")}
      </h2>
      <h3 className="text-xl md:text-2xl">{t("body.anniversary.subHeader")}</h3>
      <p className="md:text-justify">
        <Trans
          i18nKey={"body.anniversary.body"}
          ns="landing"
          components={{
            1: <span className="text-primary font-semibold" />,
            2: <span className="text-accent font-semibold" />,
            3: <span className="text-secondary font-semibold" />,
          }}
        />
      </p>
      <p className="md:text-justify">
        <Trans
          i18nKey={"body.anniversary.body2"}
          ns="landing"
          components={{
            1: <span className="text-secondary font-semibold" />,
          }}
        />
      </p>
      {/* <div id="right">
          <img
            className="rounded-md"
            src="/images/2024logoWithShirt.webp"
            alt=""
          />
        </div> */}
    </div>
  );
};

export default Anniversary;
