import React, { useState } from "react";
import Navbar from "./components/major/navbar.js";
import ProjectCard from "./components/major/ProjectCard.js";
import ReviewCard from "./components/major/ReviewCard.js";
import ServiceCard from "./components/major/Services.js";
import ArticleCard from "./components/major/ArticleCard.js";
import ContactCard from "./components/major/ContactCard.js";
import SocialCard from "./components/major/SocialCard.js";
import CopyrightBar from "./components/major/CopyrightBar.js";
import ModalBox from "./components/modal/modalBox.js";
import Introduction from "./components/major/Introduction.js";

function App() {
  
  // Modal Function
  const [modal, setModal] = useState(true);
  const [element, setElement] = useState(null);
  const toggleModal = (event) => {
    setModal(!modal);
    setElement(event);
  };

  return (
    <React.Fragment>
      <ModalBox
        toggle={modal}
        setToggle={toggleModal}
        elements={element}
      ></ModalBox>
      <Navbar toggle={toggleModal}></Navbar>
      <Introduction toggle={toggleModal}></Introduction>
      <ProjectCard toggle={toggleModal}></ProjectCard>
      <ReviewCard toggle={toggleModal}></ReviewCard>
      <ServiceCard toggle={toggleModal}></ServiceCard>
      <ArticleCard toggle={toggleModal}></ArticleCard>
      <ContactCard toggle={toggleModal}></ContactCard>
      <SocialCard></SocialCard>
      <CopyrightBar></CopyrightBar>
    </React.Fragment>
  );
}

export default App;
