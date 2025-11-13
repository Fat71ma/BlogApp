import { Link } from "react-router-dom";

export default function BlogCard({ post }) {
  return (
    <div className="card">
      <Link to={`/stories/${post.id}`}>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-5">
        <Link to={`/stories/${post.id}`}>
          <h3 className="text-xl font-semibold mb-2 hover:text-aqua transition">
            {post.title}
          </h3>
        </Link>
        <p className="text-primary/80 mb-4">{post.excerpt}</p>
        <Link to={`/stories/${post.id}`} className="btn">
          Read More
        </Link>
      </div>
    </div>
  );
}