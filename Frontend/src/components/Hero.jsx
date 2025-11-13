import heroImg from "../assets/hero.jpg";

export default function Hero() {
  return (
    <header className="bg-secondary text-light py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 text-center md:text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Discover Calm in Every Word 🌊
          </h2>
          <p className="text-light/90 text-lg max-w-md mx-auto md:mx-0">
            Stories and thoughts blending technology, design, and simplicity —
            written in a calm tone.
          </p>
          <button className="btn">Read Latest Posts</button>
        </div>

        <div className="flex-1">
          <img
            src={heroImg}
            alt="Hero"
            className="rounded-lg w-full shadow-lg object-cover"
          />
        </div>
      </div>
    </header>
  );
}