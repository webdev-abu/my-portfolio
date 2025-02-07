import { Helmet } from "react-helmet";
import AboutMe from "../Components/AboutMe";
import Banner from "../Components/Banner";
import Contact from "../Components/Contact";
import Projects from "../Components/Projects";
import QualificationExperience from "../Components/QualificationExperience";
import Skills from "../Components/Skills";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | My Portfolio</title>
      </Helmet>
      <Banner />
      <AboutMe />
      <Skills />
      <QualificationExperience />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
