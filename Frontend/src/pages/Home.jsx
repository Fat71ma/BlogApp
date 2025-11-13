import heroImg from "../assets/hero.jpg";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import { Link } from "react-router-dom";

const posts = [
  { id: 1, title: "The Sunset Faded to Twilight", img: img1 },
  { id: 2, title: "Then Going Through Some Small Strange Motions", img: img2 },
  { id: 3, title: "Two Long Weeks I Wandered", img: img3 },
  { id: 4, title: "I Shouted Above the Sudden Noise", img: img4 },
  { id: 5, title: "At Daybreak of the Fifteenth Day of My Search", img: img5 },
  { id: 6, title: "The Great Excavation Lay Far from the Plaza", img: img6 },
];

const Home = () => {
  return (
    <div>
      {/* Featured Banner */}
      <section className="relative max-w-7xl mx-auto mt-8 md:mt-0">
        <img src={heroImg} className="w-full h-[500px] object-cover rounded-md" alt="Featured" />
        <div className="absolute top-0 left-0 bg-light/90 max-w-lg m-8 p-6 rounded-md shadow-md">
          <p className="text-sm uppercase tracking-wide text-accent mb-2">
            February 5, 2025 • Featured • 4 Comments
          </p>
          <h2 className="text-3xl font-extrabold text-highlight mb-3">
            At daybreak of the fifteenth day of my search
          </h2>
          <p className="text-primary/80">
            When the amphitheater had cleared I crept stealthily to the top and
            as the great excavation lay silent beneath, I saw the world open wide.
          </p>
        </div>
      </section>

      {/* Latest Stories */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <h2 className="section-title">Latest Stories</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((p) => (
            <article
              key={p.id}
              className="bg-white rounded-md shadow-sm hover:shadow-md transition overflow-hidden"
            >
              <img src={p.img} alt={p.title} className="w-full h-56 object-cover" />
              <div className="p-5">
                <p className="text-xs uppercase text-accent mb-1">
                  April 10, 2025 • Photo
                </p>
                <h3 className="text-lg font-bold text-highlight mb-2 hover:text-accent cursor-pointer">
                  {p.title}
                </h3>
                <p className="text-sm text-primary/80 mb-3">
                  A short description of the post story or topic goes here to
                  attract readers.
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

        {/* More Posts Button */}
        <div className="text-center mt-10">
          <Link
            to="/stories"
            className="btn bg-accent text-white font-semibold px-6 py-2 rounded-md shadow-sm hover:bg-highlight transition"
          >
            More Posts
          </Link>
        </div>
      </section>

      {/* Staff Picks Section (still inside Home, not separate route) */}
      <section className="max-w-7xl mx-auto px-6 mt-20 mb-20">
        <h2 className="section-title">Staff’s Picks</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(3, 6).map((p) => (
            <article
              key={p.id}
              className="bg-white rounded-md shadow-sm hover:shadow-md transition overflow-hidden"
            >
              <img src={p.img} alt={p.title} className="w-full h-52 object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-bold text-highlight mb-2 hover:text-accent cursor-pointer">
                  {p.title}
                </h3>
                <p className="text-sm text-primary/80 mb-3">
                  Far from the plaza and in an untainted portion of the great excavation.
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
      </section>
    </div>
  );
};

export default Home;