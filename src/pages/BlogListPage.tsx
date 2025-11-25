import BlogPostPreview from "@/components/common/BlogPostPreview"
import { useTranslation } from "react-i18next";
import { BlogPostData } from "./BlogPost";

interface BlogPosts {
  [key: string]: BlogPostData;
}

const BlogListPage = () => {
  const [t] = useTranslation("blog");
  const posts = t("posts", { returnObjects: true }) as BlogPosts;

  return (
    <div className="flex flex-col items-center">
      <img
        src="/images/auditorium-seats.webp"
        alt="Systemvetardagen Blog"
        className="w-screen h-[20vh] lg:h-[40vh] max-h-[400px] object-cover"
      />
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Blog
        </h2>
        
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
      </div>
    </div>
  );
};

export default BlogListPage;
