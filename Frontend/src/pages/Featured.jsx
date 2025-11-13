import PostPreview from "../components/PostPreview";
import heroImg from "../assets/hero.jpg";

const Featured = () => {
  const featuredPosts = [
    {
      id: 6,
      title: "Featured: Blue as a Brand Identity",
      date: "Nov 1, 2025",
      author: "Anne Wave",
      excerpt: "A spotlight on how companies use rich blues to inspire trust and calm.",
      image: heroImg,
    },
  ];

  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold text-highlight mb-8 border-b border-accent/40 pb-3">
        Featured Stories
      </h1>
      {featuredPosts.map((p) => (
        <PostPreview key={p.id} post={p} />
      ))}
    </div>
  );
};

export default Featured;