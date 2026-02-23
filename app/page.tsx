import Image from "next/image";
import Masonry from "./components/Masonry";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Buchung from "./components/Buchung";
const items = [
  {
    id: "1",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    url: "https://unsplash.com/photos/mountain-landscape",
    height: 400,
  },
  {
    id: "2",
    img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    url: "https://unsplash.com/photos/city-night",
    height: 300,
  },
  {
    id: "3",
    img: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    url: "https://unsplash.com/photos/forest",
    height: 550,
  },
  {
    id: "4",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    url: "https://unsplash.com/photos/beach",
    height: 350,
  },
  {
    id: "5",
    img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    url: "https://unsplash.com/photos/desert",
    height: 450,
  },
  {
    id: "6",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    url: "https://unsplash.com/photos/portrait",
    height: 500,
  },
  {
    id: "7",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    url: "https://unsplash.com/photos/ocean",
    height: 380,
  },
  {
    id: "8",
    img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    url: "https://unsplash.com/photos/lake",
    height: 600,
  },
  {
    id: "9",
    img: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913",
    url: "https://unsplash.com/photos/food",
    height: 320,
  },
  {
    id: "10",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
    url: "https://unsplash.com/photos/street",
    height: 470,
  },
];
export default function Home() {
  return (
    <div className="min-h-screen bg-violet-50 dark:bg-black">
        <Hero />
      <div className="mx-auto max-w-6xl px-4">
        
      <div className="bg-zinc-50 dark:bg-black">
        <Card />
          </div>
        </div>
         <div className=" bg-black">
        <Buchung />
          </div>
 <div className="mx-auto max-w-6xl px-4">
        <div className="mt-32 bg-black" >
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
