import React, { useState} from "react";
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
import ModalBox from "./components/modal/modalBox.js";

function App() {

  // Modal Function 

  const [modal, setModal] = useState(true);
  const [element, setElement] = useState(null);
  const toggleModal = (event) => {
    setModal(!modal);
    setElement(event)
  };


  return (
    <React.Fragment>
      <ModalBox toggle={modal} setToggle={toggleModal} elements={element}></ModalBox>
      <Navbar toggle={toggleModal}></Navbar>
      <section className="home">
        <InfoCard toggle={toggleModal}></InfoCard>
        <ProfileCard></ProfileCard>
      </section>
      <section className="project">
        <ProjectCard toggle={toggleModal}></ProjectCard>
      </section>
      <section className="review">
        <ReviewCard toggle={toggleModal}></ReviewCard>
      </section>
      <section className="services">
        <ServiceCard toggle={toggleModal}></ServiceCard>
      </section>
      <section className="article">
        <ArticleCard toggle={toggleModal}></ArticleCard>
      </section>
      <section className="contact">
        <ContactCard toggle={toggleModal}></ContactCard>
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
