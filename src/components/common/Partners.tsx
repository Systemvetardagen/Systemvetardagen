import { useCompanies } from "@/lib/hooks/useCompanyContext";
import { useTranslation } from "react-i18next";

const Partners = () => {
  const { t } = useTranslation("common");
  const { partners } = useCompanies();
  return (
    partners &&
    partners.length > 0 && (
      <div className="w-screen flex flex-col items-center max-w-4xl px-4 my-10 sm:px-6 lg:px-8">
        <h2 className="text-xl lg:text-3xl mb-8 font-light">{t("partners")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-6">
          {partners.map((partner, index) => (
            <a className="" href={`/companies/${partner.slug}`} key={index}>
              <img
                src={partner.logoURL}
                className="object-contain h-32 w-56"
                alt="company logo"
              />
            </a>
          ))}
        </div>
      </div>
    )
  );
};

export default Partners;
