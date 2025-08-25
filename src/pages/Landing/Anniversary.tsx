import { Trans, useTranslation } from "react-i18next";

const Anniversary = () => {
  const [t] = useTranslation("landing");
  return (
    <section id="30" className="my-5 flex flex-col md:flex-row gap-4">
      <div id="left" className="flex flex-col gap-2">
        <h2 className="text-2xl md:text-4xl font-semibold">
        {t("body.anniversary.header")}
        </h2>
        <h3 className="text-3xl">
          {t("body.anniversary.subHeader")}
        </h3>
        <p className="">
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
        <p>
        {t("body.anniversary.body2")}
        </p>
      </div>
      <div id="right">
        <img
          className="rounded-md"
          src="/images/2024logoWithShirt.webp"
          alt=""
        />
      </div>
    </section>
  );
};

export default Anniversary;
