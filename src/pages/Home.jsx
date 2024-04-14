import Stats from "../layouts/Stats";
import Hero from "../components/heros/Hero";
import OurPlaces from "../layouts/OurPlaces";
import Intro from "../components/heros/Intro";
import Lectures from "../components/heros/Lectures";

const Home = () => {
  return (
    <>
      <Hero />
      <Intro />
      <Lectures />
      <Stats />
      <OurPlaces />
    </>
  );
};

export default Home;
