import { Link } from "react-router-dom";

const PostPreview = ({ post }) => (
  <article className="border-b border-accent/20 pb-8 mb-8">
    <img
      src={post.image}
      alt={post.title}
      className="rounded-lg mb-4 w-full h-64 object-cover"
    />
    <h2 className="text-2xl font-bold mb-2 hover:text-highlight transition-colors">
      <Link to={`/post/${post.id}`}>{post.title}</Link>
    </h2>
    <p className="post-meta">
      {post.date} • by {post.author}
    </p>
    <p className="text-primary/80 mb-4">{post.excerpt}</p>
    <Link to={`/post/${post.id}`} className="btn-primary">Read More</Link>
  </article>
);

export default PostPreview;