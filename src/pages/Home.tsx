import About from "../components/about/About";
import Catalog from "../components/catalog/Catalog";
import Quiz from "../components/quiz/Quiz";
import Team from "../components/team/Team";

const Home = () => {
  return (
    <>
      <Catalog />
      <About />
      <Quiz />
      <Team />
    </>
  );
};

export default Home;
