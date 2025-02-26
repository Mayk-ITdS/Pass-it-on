import { Hero } from "./Hero/Hero";
import { Nav } from "./Nav/Nav";
import { ThreeColumns } from "./ThreeColumns/ThreeColumns";

export const Home: React.FC = () => {
  return (
    <>
      <Nav />
      <Hero />
      <ThreeColumns />
    </>
  );
};
