import BlogPostPreview from "@/components/common/BlogPostPreview"

const BlogListPage = () => {
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
          <BlogPostPreview
            postKey="posts.announcement"
            postId="announcement"
            imageSrc="/images/nod.webp"
          />
          
          <BlogPostPreview
            postKey="posts.fairie"
            postId="fairie"
            imageSrc="/images/workers.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogListPage;
