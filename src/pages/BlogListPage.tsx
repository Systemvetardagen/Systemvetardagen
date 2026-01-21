import BlogPostPreview from "@/components/common/BlogPostPreview";
import { useTranslation } from "react-i18next";
import { BlogPostData } from "./BlogPage";
import { Partners } from "@/components";

interface BlogPosts {
  [key: string]: BlogPostData;
}

const BlogListPage = () => {
  const [t] = useTranslation("blog");
  const posts = t("posts", { returnObjects: true }) as BlogPosts;
  const title = t("title");
  const subtitle = t("subtitle");

  return (
    <div className="flex flex-col items-center">
      <img
        src="/images/auditorium-seats.webp"
        alt="Systemvetardagen Blog"
        className="w-screen h-[20vh] lg:h-[40vh] max-h-[400px] object-cover"
      />
      <div className="flex flex-col gap-8 py-8 px-4 mb-10">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-3 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-8 max-w-5xl mx-auto">
          {Object.entries(posts).map(([postId, post]) => (
            <BlogPostPreview
              key={postId}
              postKey={`posts.${postId}`}
              postId={postId}
              imageSrc={post.image}
            />
          ))}
        </div>
        <Partners useCards />
      </div>
    </div>
  );
};

export default BlogListPage;
