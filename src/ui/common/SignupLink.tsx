import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { Button } from ".";

const SignupLink: React.FC = () => {
  const signupUrl: string = "/signup";
  const [t] = useTranslation<string>("landing");
  return (
    <div className="flex flex-col items-center text-center gap-6 p-6 my-10 rounded-md shadow-md w-full">
      <h3 className="text-2xl lg:text-4xl font-semibold px-2">
        {t("body.uppdated.header")}
      </h3>
      <p className="text-lg font-light">
        {t("body.uppdated.body")}
      </p>
      <NavLink to={signupUrl} className="w-full">
        <Button size="md" variant="secondary" className="w-full">
          {t("body.uppdated.button")}
        </Button>
      </NavLink>
    </div>
  );
};

export default SignupLink;
