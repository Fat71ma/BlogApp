import PostPreview from "../components/PostPreview";
import heroImg from "../assets/hero.jpg";

const NewStories = () => {
  const posts = [
    {
      id: 4,
      title: "Breaking: Design Trends 2025",
      date: "Nov 12, 2025",
      author: "Team Blue",
      excerpt: "Explore what’s shaping digital aesthetics for the upcoming year.",
      image: heroImg,
    },
    {
      id: 5,
      title: "Figma & Tailwind Integration",
      date: "Nov 10, 2025",
      author: "Max Light",
      excerpt: "New workflows that make prototyping and coding sync easier.",
      image: heroImg,
    },
  ];

  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold text-highlight mb-8 border-b border-accent/40 pb-3">
        Latest Stories
      </h1>
      {posts.map((p) => (
        <PostPreview key={p.id} post={p} />
      ))}
    </div>
  );
};

export default NewStories;