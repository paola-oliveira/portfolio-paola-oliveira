import AboutMe from "../Components/AboutMe/AboutMe";
import Banner from "../Components/Banner/Banner";
import Header from "../Components/Header/Header";
import Projects from "../Components/Projects/Projects";
import Technologies from "../Components/Technologies/Technologies";
import TimeLine from "../Components/TimeLine/TimeLine";

function Main() {

    return (
      <>
        <Header/>
        <Banner/>
        <AboutMe/>
        <Technologies/>
        <TimeLine />
        <Projects/>
      </>
    )
  }
  
  export default Main;