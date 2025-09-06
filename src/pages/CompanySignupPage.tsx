import React from "react";
import { useTranslation } from "react-i18next";

interface CompanySignupProps {
  temp?: string;
}

const CompanySignup: React.FC<CompanySignupProps> = () => {
  const { t } = useTranslation();
  return (
    <div className="gradient-background grow">
      <div className="flex flex-col items-center py-32 px-10">
        <h2 className="text-5xl  text-white font-semibold lg:text-6xl mb-8">
          {t("Sign up")}
        </h2>
        <div className="relative">
          <div className="flex items-center flex-wrap justify-center gap-2 mb-4">
            {/* <h2 className="font-light  text-white">{t("Attend our fair")}</h2> */}
            {/* Add any additional elements here if needed */}
          </div>

          {/* Signup card */}
          <div className="max-w-md mx-auto mt-12 p-6  rounded-lg border  shadow-2xl border-gray-200">
            <p className="text-center text-white text-lg opacity-100 font-medium">
              If you’re interested in signing up, email us at{" "}
              <a
                href="mailto:systemvetardagen@disk.su.se"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                systemvetardagen@disk.su.se
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanySignup;
