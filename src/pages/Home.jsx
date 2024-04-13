import Stats from "../layouts/Stats";
import Hero from "../components/heros/Hero";
import Intro from "../components/heros/Intro";
import OurPlaces from "../layouts/OurPlaces";

const Home = () => {
  return (
    <>
      <Hero />
      <Intro />
      <Stats />
      <OurPlaces />
    </>
  );
};

export default Home;
