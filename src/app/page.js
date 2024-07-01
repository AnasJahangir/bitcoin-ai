import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import HowToBuy from "./components/HowToBuy";
import ReadyToJoin from "./components/ReadyToJoin";
import Swap from "./components/Swap";
import Token from "./components/Token";
import RoadMap from "./components/RoadMap";
import Map from "./components/Map";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <HowToBuy />
      <ReadyToJoin />
      <Swap />
      <Token />
      <RoadMap/>
      <Map/>
    </div>
  );
}
