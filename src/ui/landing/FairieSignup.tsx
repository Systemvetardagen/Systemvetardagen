import { JSX } from "react";
import { LuPartyPopper, LuHeartHandshake, LuStar } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { Trans } from "react-i18next";
import { NavLink } from "react-router-dom";
import { FadeInSection } from "../layout";

interface Card {
  icon: JSX.Element;
  transKey: string;
}

const FairieSignup = () => {
  const SignupUrl: string = "/";
  const cards: Card[] = [
    {
      icon: <LuHeartHandshake height={48} width={48} color="#325fff" />,
      transKey: "help",
    },
    {
      icon: <LuStar height={48} width={48} color="#325fff" />,
      transKey: "fair",
    },
    {
      icon: <LuPartyPopper height={48} width={48} color="#325fff" />,
      transKey: "party",
    },
  ];
  return (
    <FadeInSection
      direction="fadeLeft"
      id="fairie"
      className="flex flex-col items-center text-center gap-6 p-6 mt-10 rounded-md w-full"
    >
      <h3 className="font-semibold text-2xl md:text-4xl">
        <Trans
          i18nKey={"body.fairie.header"}
          ns="landing"
          components={{
            1: <span className="text-primary" />,
          }}
        />
      </h3>
      <h4 className="text-lg font-light">
        <Trans i18nKey={"body.fairie.body"} ns="landing" />
      </h4>
      <div className="flex flex-col md:flex-row gap-6 w-full mt-4 md:justify-center md:items-stretch">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 rounded-md shadow-md px-4 py-8"
          >
            <div>{card.icon}</div>
            <h5 className="font-semibold">
              <Trans
                i18nKey={`body.fairie.cards.${card.transKey}.header`}
                ns="landing"
              />
            </h5>
            <p>
              <Trans
                i18nKey={`body.fairie.cards.${card.transKey}.body`}
                ns="landing"
              />
            </p>
          </div>
        ))}
      </div>
      <NavLink to={SignupUrl} className={"w-full"} target="_blank">
        <Button size="xl" className="w-full" variant="default">
          Sign Up
        </Button>
      </NavLink>
    </FadeInSection>
  );
};

export default FairieSignup;
