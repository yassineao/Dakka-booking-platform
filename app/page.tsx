import Image from "next/image";
import Masonry from "./components/Masonry";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const items = [
    {
      id: "1",
      img: "https://picsum.photos/id/1015/600/900?grayscale",
      url: "https://example.com/one",
      height: 400,
    },
    {
      id: "2",
      img: "https://4kwallpapers.com/images/walls/thumbs_3t/25532.jpg",
      url: "https://example.com/two",
      height: 250,
    },
    {
      id: "3",
      img: "https://4kwallpapers.com/images/walls/thumbs_3t/25355.jpg",
      url: "https://example.com/three",
      height: 600,
    },
    // ... more items
];
export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
        <Hero />
      <div className="mx-auto max-w-6xl px-4">
        
        

        <div className="mt-32">
          <Masonry
            items={items}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover
            hoverScale={0.95}
            blurToFocus
            colorShiftOnHover={false}
          />
        </div>

      </div>
    </div>
  );
}
