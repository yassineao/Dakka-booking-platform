import Pricing from "./components/Pricing";
import Socials from "./components/Socials";
import BookingForm from "./components/BookingForm";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Buchung from "./components/Buchung";
export default function Home() {
  return (
    <div className="min-h-screen bg-violet-50 dark:bg-black">
      <Hero />
     
      
     <div className="mx-auto max-w-6xl px-4">

          <Card />

      </div>
<div className=" bg-black" id="buchung">
        <BookingForm />
      </div>
        <div className=" " id="packs">
        <Pricing />
      </div>
   
 
     <div className=" bg-white py-16" id="packs">
        <Socials/>
      </div>

    </div>
  );
}
