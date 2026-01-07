import React, { useState } from "react";
import FloorMap from "./FloorMap";

type Booth = {
  id: string;
  name: string;
  logoUrl: string;
  description: string;
  floor: 1 | 2;
};
//<a id="map" href="/svgs/floormap.svg" className="mt-10">
//       <img
//         className="w-full rounded-3xl"
//         src="/svgs/floormap.svg"
//         alt="Floor map"
//       />
//     </a>

const booths: Record<string, Booth> = {
  A1: {
    id: "A1",
    name: "Company A",
    logoUrl: "/images/KPMGlogo.png",
    description: "Description for Company A",
    floor: 1,
  },
};

const InteractiveMap: React.FC = () => {
  const [activeBooth, setActiveBooth] = useState<Booth | null>(null);

  const onBoothClick = (id: string) => {
    setActiveBooth(booths[id]);
  };

  return (
    <div className="relative w-full max-w-3-xl mx-auto rounded-3xl">
      <div className="origin-top-left">
        <FloorMap
          className="w-full h-auto rounded-3xl"
          preserveAspectRatio="xMidYMid meet"
          boothClicked={onBoothClick}
          onClick={(e: React.MouseEvent<SVGSVGElement>) => {
            const target = e.target as SVGElement;
            const boothId = target
              .closest("[data-booth-id]")
              ?.getAttribute("data-booth-id");
            if (boothId) onBoothClick(boothId);
          }}
        />
      </div>

      {activeBooth && (
        <div className="absolute right-4 top-4 w-80 rounded-xl bg-white p-4 shadow-lg">
          <img src={activeBooth.logoUrl} alt={activeBooth.name} />
          <h3 className="mt-2 font-semibold">{activeBooth.name}</h3>
          <p className="text-sm">{activeBooth.description}</p>
        </div>
      )}
    </div>
  );
};

export default InteractiveMap;
