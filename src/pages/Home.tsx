import About from '../components/about/About';
import Catalog from '../components/catalog/Catalog';
import Contacts from '../components/contacts/Contacts';
import Faq from '../components/faq/Faq';
import Insta from '../components/insta/Insta';
import Quiz from '../components/quiz/Quiz';
import Team from '../components/team/Team';

const Home = () => {
  return (
    <>
      <Catalog />
      <About />
      <Quiz />
      <Team />
      <Faq />
      <Contacts />
      <Insta />
    </>
  );
};

export default Home;
