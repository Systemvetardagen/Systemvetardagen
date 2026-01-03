import React from "react";
import { NavLink } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import BlogPostPreview from "@/components/common/BlogPostPreview";

export const HighlightSection: React.FC = () => {
  const [t] = useTranslation("landing");
  
  return (
    <div className="w-full flex flex-col gap-8 my-12 md:mt-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <NavLink
          to="/visit-info"
          className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
        >
          <div className="relative h-48 md:h-56">
            <img
              src="/images/crowded-from-above.webp"
              alt="Visitor Information"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-opacity-40 transition-all duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white bg-opacity-95 px-5 py-3 rounded-lg shadow-lg text-center transform group-hover:scale-105 transition-transform duration-300">
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  {t("body.highlights.visitorInfo.title")}
                </h3>
                <p className="text-xs text-gray-600">{t("body.highlights.visitorInfo.subtitle")}</p>
              </div>
            </div>
          </div>
        </NavLink>

        <NavLink
          to="/about"
          className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
        >
          <div className="relative h-48 md:h-56">
            <img
              src="/images/auditorium-seats.webp"
              alt="About Systemvetardagen"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-opacity-40 transition-all duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white bg-opacity-95 px-5 py-3 rounded-lg shadow-lg text-center transform group-hover:scale-105 transition-transform duration-300">
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  {t("body.highlights.aboutUs.title")}
                </h3>
                <p className="text-xs text-gray-600">
                  {t("body.highlights.aboutUs.subtitle")}
                </p>
              </div>
            </div>
          </div>
        </NavLink>
      </div>
      <div className="flex flex-col w-full px-4 md:max-w-[90%] md:mx-auto">
        <BlogPostPreview
          postKey="posts.announcement"
          postId="announcement"
          imageSrc="/images/heads.webp"
        />
        <div className="mt-8 flex justify-center">
          <NavLink
            to="/blog"
            className="inline-flex items-center gap-2 text-lg font-medium hover:underline transition-all group"
          >
            {t("body.highlights.viewAllBlogPosts")}
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};
