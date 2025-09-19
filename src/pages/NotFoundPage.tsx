import React from "react";
import { Button } from "@/components/ui/button";
import { ButtonNavigate } from "@/components/ui/buttonNavigate";
import { useTranslation } from "react-i18next";

const NotFoundPage: React.FC = () => {
  const [t] = useTranslation("common");
  return (
    <div className="grow flex flex-col items-center justify-center bg-white px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            404
          </h1>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            {t("notfound.header")}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-md mx-auto">
            {t("notfound.subheader")}
          </p>
        </div>

        <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
          <ButtonNavigate variant={"gradient"} size={"xl"} to="/">
            {t("notfound.start")}
          </ButtonNavigate>

          <Button
            onClick={() => window.history.back()}
            variant={"plain"}
            size={"xl"}
          >
            {t("notfound.back")}
          </Button>
        </div>

        <div className="mt-12 text-sm text-gray-400">
          <p>{t("notfound.fault")}</p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
