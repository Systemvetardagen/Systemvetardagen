import React from "react";
import CountUp from "../../components/ReactBits/CountUp";
import { useTranslation } from "react-i18next";

interface StatisticItem {
  value: number | string;
  valueKey?: string;
  labelKey: string;
  showPlus?: boolean;
  duration?: number;
  separator?: string;
}

interface StatisticsProps {
  statistics?: StatisticItem[];
  className?: string;
}

const defaultStatistics: StatisticItem[] = [
  {
    value: 1000,
    labelKey: "visitors",
    showPlus: true,
    duration: 1,
    separator: ",",
  },
  {
    value: 50,
    labelKey: "exhibitors",
    showPlus: true,
    duration: 1,
    separator: ",",
  },
  {
    value: 30,
    labelKey: "years",
    showPlus: false,
    duration: 1,
    separator: ",",
  },
  {
    value: 0,
    valueKey: "unlimited",
    labelKey: "opportunities",
    showPlus: false,
  },
];

const Statistics: React.FC<StatisticsProps> = ({
  statistics = defaultStatistics,
  className = "",
}) => {
  const [t] = useTranslation("landing");
  return (
    <div
      className={`grid grid-cols-2 grid-rows-2 md:flex w-full md:justify-center ${className}`}
    >
      {statistics.map((stat, index) => (
        <div key={index} className="p-10 rounded-md flex flex-col items-center">
          <div>
            {stat.valueKey ? (
              <span className="text-3xl md:text-5xl font-semibold">
                {t("body.stats.unlimited")}
              </span>
            ) : (
              <CountUp
                from={0}
                to={stat.value}
                separator={stat.separator || ","}
                direction="up"
                duration={stat.duration || 1}
                className="text-3xl md:text-5xl font-semibold"
              />
            )}
            {stat.showPlus && (
              <span className="text-3xl md:text-5xl font-semibold">+</span>
            )}
          </div>
          <span className="text-3xl">{t(`body.stats.${stat.labelKey}`)}</span>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
