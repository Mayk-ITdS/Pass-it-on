import { AboutPhoto } from "./AboutPhoto/AboutPhoto";
import { FourSteps } from "./FourSteps/FourSteps";
import { Hero } from "./Hero/Hero";
import { Nav } from "./Nav/Nav";
import { StepsHeader } from "./StepsHeader/StepsHeader";
import { ThreeColumns } from "./ThreeColumns/ThreeColumns";
import styles from "./Home.module.scss";
import { WhoWeHelp } from "./WhoWeHelp/WhoWeHelp";
import { Footer } from "./Footer/Footer";
export const Home: React.FC = () => {
  return (
    <>
      <Nav />
      <Hero />
      <ThreeColumns />
      <StepsHeader />
      <FourSteps />
      <AboutPhoto />
      <WhoWeHelp />
      <Footer />
    </>
  );
};
