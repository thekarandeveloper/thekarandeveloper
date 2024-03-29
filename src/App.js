import React from "react";
import Navbar from "./components/major/navbar.js";
import InfoCard from "./components/major/infoCard.js";
import ProfileCard from "./components/major/profileCard.js";
import ProjectCard from "./components/major/ProjectCard.js";
import ReviewCard from "./components/major/ReviewCard.js";
import ServiceCard from "./components/major/Services.js";
import ArticleCard from "./components/major/ArticleCard.js";
import ContactCard from "./components/major/ContactCard.js";
import SocialCard from "./components/major/SocialCard.js";
import CopyrightBar from "./components/major/CopyrightBar.js";
import ModalBox from "./components/major/modalBox.js";
import ModalContextProvider from "./context/modalContext.js";

function App() {
  return (
    <React.Fragment>
      <ModalBox></ModalBox>
      <Navbar></Navbar>
      <section className="home">
        <InfoCard></InfoCard>
        <ProfileCard></ProfileCard>
      </section>
      <section className="project">
        <ProjectCard></ProjectCard>
      </section>
      <section className="review">
        <ReviewCard></ReviewCard>
      </section>
      <section className="services">
        <ServiceCard></ServiceCard>
      </section>
      <section className="article">
        <ArticleCard></ArticleCard>
      </section>
      <section className="contact">
        <ContactCard></ContactCard>
      </section>
      <section className="social">
        <SocialCard></SocialCard>
      </section>
      <section className="copyright">
        <CopyrightBar></CopyrightBar>
      </section>
    </React.Fragment>
  );
}

export default App;
