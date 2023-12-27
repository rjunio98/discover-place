import Image from "next/image";
import Hero from "./components/Hero";
import PlaceList from "./components/PlaceList";

export default function Home() {
  return (
    <div>
      <Hero />
      
      <PlaceList />
    </div>
  );
}
