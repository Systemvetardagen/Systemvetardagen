import { useParams, Navigate } from "react-router-dom";
import BlogPost from "./BlogPost";

const BlogDetailPage = () => {
  const { postId } = useParams<{ postId: string }>();

  const validPostIds = ["announcement", "fairie"];

  if (!postId || !validPostIds.includes(postId)) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto py-20">
        <BlogPost postKey={`posts.${postId}`} />
      </div>
    </div>
  );
};

export default BlogDetailPage;
