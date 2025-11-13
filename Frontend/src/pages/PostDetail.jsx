import { useParams, Link } from "react-router-dom";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";

const posts = [
  {
    id: "1",
    title: "The Sunset Faded to Twilight",
    image: img1,
    date: "April 10, 2025",
    content: `The sunset faded behind the hills, and twilight slowly embraced the valley.
Soft whispers of the evening wind carried the scent of cedar across the plains.

In that moment, I realized that endings are nothing more than beginnings disguised in dusk.
The soft orange glow melted into the clouds, tracing dreams across the horizon.`,
  },
  {
    id: "2",
    title: "Then Going Through Some Small Strange Motions",
    image: img2,
    date: "April 11, 2025",
    content: `The forest swayed with gentle uncertainty.
Leaves danced to a song only the wind understood.

There was something odd in the rhythm — a pulse between thought and instinct,
as though nature held its breath just before revelation.`,
  },
  {
    id: "3",
    title: "Two Long Weeks I Wandered",
    image: img3,
    date: "April 12, 2025",
    content: `Two weeks stretched endlessly across the landscape.
I followed the faint trails of sunrise and moonlight,
seeking what was lost, finding instead the echoes of belief.`,
  },
  {
    id: "4",
    title: "I Shouted Above the Sudden Noise",
    image: img4,
    date: "April 13, 2025",
    content: `The city roared with its metallic heart.
I shouted above it all, searching for a tone that could cut through chaos.
But only silence answered — and silence, it seems, has its own language.`,
  },
  {
    id: "5",
    title: "At Daybreak of the Fifteenth Day of My Search",
    image: img5,
    date: "April 14, 2025",
    content: `At daybreak, a pale ray of light fell on the last map fragment I carried.
It led not to treasure, but to understanding — of all journeys and their cost.
At daybreak, a pale ray of light fell on the last map fragment I carried.
It led not to treasure, but to understanding — of all journeys and their cost
At daybreak, a pale ray of light fell on the last map fragment I carried.
It led not to treasure, but to understanding — of all journeys and their cost
At daybreak, a pale ray of light fell on the last map fragment I carried.
It led not to treasure, but to understanding — of all journeys and their cost
The excavation lay before me, vast and unmoved, and I felt both infinite and small.`,
  },
  {
    id: "6",
    title: "The Great Excavation Lay Far from the Plaza",
    image: img6,
    date: "April 15, 2025",
    content: `The excavation site was quiet, the machines still.
Dust shimmered like ghosts over the pale stone walls.
Far from the city, I stood watching the layers of past unfold before me.
The excavation site was quiet, the machines still.
Dust shimmered like ghosts over the pale stone walls.
Far from the city, I stood watching the layers of past unfold before me
At daybreak, a pale ray of light fell on the last map fragment I carried.
It led not to treasure, but to understanding — of all journeys and their costAt daybreak, a pale ray of light fell on the last map fragment I carried.
It led not to treasure, but to understanding — of all journeys and their cost`,
  },
];

export default function PostDetail() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post)
    return (
      <div className="max-w-3xl mx-auto py-20 px-6">
        <p>Post not found.</p>
      </div>
    );

  return (
    <article className="max-w-3xl mx-auto py-16 px-6">
      {/* <Link to="/stories" className="text-accent hover:underline">
        ← Back to Stories
      </Link> */}
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-80 object-cover rounded-md mt-6 mb-8"
      />
      <h1 className="text-4xl font-bold text-primary mb-2">{post.title}</h1>
      <p className="text-sm text-primary/60 mb-6">{post.date}</p>
      <p className="text-primary/90 leading-relaxed whitespace-pre-line">
        {post.content}
      </p>
    </article>
  );
}