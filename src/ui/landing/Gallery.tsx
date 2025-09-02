import { NavLink } from "react-router-dom";

const Gallery = () => {
  const images = [
    "/images/2024logoWithShirt.webp",
    "/images/crowded-from-above.webp",
    "/images/crowded.webp",
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-4">
        <NavLink
          to={"/visit-info"}
          className="flex-1 overflow-hidden rounded-lg shadow-lg relative cursor-pointer block"
        >
          <img
            src={images[0]}
            alt="Gallery image 1"
            className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
          />
          <div className="p-2 bg-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md">
            Events
          </div>
        </NavLink>
        <NavLink
          to={"/companies"}
          className="flex-1 overflow-hidden rounded-lg shadow-lg relative cursor-pointer block"
        >
          <img
            src={images[1]}
            alt="Gallery image 2"
            className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
          />
          <div className="p-2 bg-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md">
            Companies
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Gallery;
