import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FadeInSection } from "../components/layout";

export interface BlogParagraph {
  type: "text" | "link";
  content: string;
  href?: string;
  external?: boolean;
}

export interface BlogPostData {
  title: string;
  date: string;
  image?: string;
  paragraphs: BlogParagraph[][];
}

interface BlogPostProps {
  postKey: string;
}

const BlogPost = ({ postKey }: BlogPostProps) => {
  const [t] = useTranslation("blog");
  const post = t(postKey, { returnObjects: true }) as BlogPostData;

  if (!post || typeof post === "string" || !post.paragraphs) {
    return (
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="bg-red-100 dark:bg-red-900 rounded-lg p-6 text-red-800 dark:text-red-200">
          <p className="font-semibold">Error loading blog post</p>
          <p className="text-sm mt-2">
            Post key: <code className="bg-red-200 dark:bg-red-800 px-2 py-1 rounded">{postKey}</code>
          </p>
          <p className="text-sm mt-1">
            Make sure the translation file is loaded and the post key exists.
          </p>
        </div>
      </div>
    );
  }

  const renderParagraphContent = (paragraph: BlogParagraph[]) => {
    return paragraph.map((segment, index) => {
      if (segment.type === "link") {
        if (segment.external) {
          return (
            <a
              key={index}
              href={segment.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              {segment.content}
            </a>
          );
        }
        return (
          <a
            key={index}
            href={segment.href}
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            {segment.content}
          </a>
        );
      }
      return <span key={index}>{segment.content}</span>;
    });
  };

  return (
    <FadeInSection direction="fadeUp" className="max-w-4xl mx-auto py-8 px-4">
      <article className="overflow-hidden p-8">
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="rounded-lg w-full h-64 md:h-96 object-cover"
          />
        )}
        <div className="mt-4">
          <header className="mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
            <Link
              to="/blog"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-4 text-sm"
            >
              ← Back to Blog
            </Link>
            <h2 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
              {post.title}
            </h2>
            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
              <time className="text-sm">{post.date}</time>
            </div>
          </header>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {post.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                {renderParagraphContent(paragraph)}
              </p>
            ))}
          </div>
        </div>
      </article>
    </FadeInSection>
  );
};

export default BlogPost;
