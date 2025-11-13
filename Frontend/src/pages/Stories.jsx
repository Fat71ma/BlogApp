import { Link } from "react-router-dom";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";

const posts = [
  { id: 1, title: "The Sunset Faded to Twilight", img: img1 },
  { id: 2, title: "Then Going Through Some Small Strange Motions", img: img2 },
  { id: 3, title: "Two Long Weeks I Wandered", img: img3 },
  { id: 4, title: "I Shouted Above the Sudden Noise", img: img4 },
  { id: 5, title: "At Daybreak of the Fifteenth Day of My Search", img: img5 },
  { id: 6, title: "The Great Excavation Lay Far from the Plaza", img: img6 },
];

export default function Stories() {
  return (
    <main className="section max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-10 text-center">All Stories</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((p) => (
          <article
            key={p.id}
            className="bg-white rounded-md shadow-sm hover:shadow-md transition overflow-hidden"
          >
            <img src={p.img} alt={p.title} className="w-full h-52 object-cover" />
            <div className="p-5">
              <p className="text-xs uppercase text-accent mb-1">
                April 10, 2025 • Photo
              </p>
              <h3 className="text-lg font-bold text-highlight mb-2 hover:text-accent">
                {p.title}
              </h3>
              <p className="text-sm text-primary/80 mb-3">
                A short description of this post’s topic to introduce the idea to readers.
              </p>
              <Link
                to={`/stories/${p.id}`}
                className="text-accent text-sm font-semibold hover:underline"
              >
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}