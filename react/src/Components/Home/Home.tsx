import { AboutPhoto } from "./AboutPhoto/AboutPhoto";
import { FourSteps } from "./FourSteps/FourSteps";
import { Hero } from "./Hero/Hero";
import { Nav } from "./Nav/Nav";
import { StepsHeader } from "./StepsHeader/StepsHeader";
import { ThreeColumns } from "./ThreeColumns/ThreeColumns";
import styles from "./Home.module.scss";
import { WhoWeHelp } from "./WhoWeHelp/WhoWeHelp";
export const Home: React.FC = () => {
  return (
    <>
      <div className={styles.homeContainer}>
        <Nav />
        <Hero />
        <ThreeColumns />
        <StepsHeader />
        <FourSteps />
        <AboutPhoto />
        <WhoWeHelp />
      </div>
    </>
  );
};
