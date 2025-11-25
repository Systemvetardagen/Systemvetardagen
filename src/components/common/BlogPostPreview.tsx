import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { BlogPostData } from "@/pages/BlogPage";

interface BlogPostPreviewProps {
  postKey: string;
  postId: string;
  imageSrc?: string;
}

const BlogPostPreview = ({ postKey, postId, imageSrc }: BlogPostPreviewProps) => {
  const [t] = useTranslation("blog");
  const post = t(postKey, { returnObjects: true }) as BlogPostData;

  if (!post || typeof post === "string") {
    return null;
  }

  const getPreviewText = () => {
    if (!post.paragraphs || post.paragraphs.length === 0) return "";
    const firstParagraph = post.paragraphs[0];
    const text = firstParagraph
      .map((segment) => segment.content)
      .join("")
      .substring(0, 150);
    return text.length >= 150 ? text + "..." : text;
  };

  return (
    <NavLink
      to={`/blog/${postId}`}
      className="flex flex-col w-full p-4 gap-4 md:flex-row md:items-center border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800"
    >
      {imageSrc && (
        <img
          src={imageSrc}
          alt={post.title}
          className="w-full h-48 md:w-64 md:h-40 object-cover rounded-2xl flex-shrink-0"
        />
      )}
      <div className="flex flex-col justify-between flex-1">
        <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
          {post.title}
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
          {getPreviewText()}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-blue-500 font-medium text-sm hover:underline">
            {t("readMore", "Read more")}
          </span>
          <time className="text-xs text-gray-400 dark:text-gray-500">
            {post.date}
          </time>
        </div>
      </div>
    </NavLink>
  );
};

export default BlogPostPreview;
