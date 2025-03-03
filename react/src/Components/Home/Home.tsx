import { AboutPhoto } from "./AboutPhoto/AboutPhoto";
import { FourSteps } from "./FourSteps/FourSteps";
import { Hero } from "./Hero/Hero";
import { Nav } from "./Nav/Nav";
import { StepsHeader } from "./StepsHeader/StepsHeader";
import { ThreeColumns } from "./ThreeColumns/ThreeColumns";

export const Home: React.FC = () => {
  return (
    <>
      <Nav />
      <Hero />
      <ThreeColumns />
      <StepsHeader />
      <FourSteps />
      <AboutPhoto />
    </>
  );
};
