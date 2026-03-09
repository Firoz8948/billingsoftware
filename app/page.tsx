import Hero from "./components/Hero";
import Slider from "./components/Slider";
import Data from "./components/Data";
import Features from "./components/Features";
import Benefits from "./components/Benefits";
import Build from "./components/build";
import Faqs from "./components/faqs";
import Rating from "./components/rating";


export default function HomePage() {
  return (
    <main>
      <Hero />
      <Slider />
      <Data />
      <Features />
      <Benefits />
      <Build />
      <Faqs />
      <Rating />

    </main>
  );
}