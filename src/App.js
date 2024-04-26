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
  const [modal, setModal] = useState(false);
  const [item, setItem] = useState([]);
  const [category, setCategory] = useState([]);


  const modalOpen = (category, selectedItem) => {
    setModal(!modal);
    setItem(selectedItem);
    setCategory(category);
  };

  const modalClose = () => {
    setModal(!modal);
  };
  return (
    <React.Fragment>
      <ModalBox
        modalOpen={modal}
        modalClose={modalClose}
        category={category}
        selectedItem={item}
      ></ModalBox>
      <Navbar toggle={modalOpen}></Navbar>
      <Introduction toggle={modalOpen}></Introduction>
      <ProjectCard toggle={modalOpen}></ProjectCard>
      <ReviewCard toggle={modalOpen}></ReviewCard>
      <ServiceCard toggle={modalOpen}></ServiceCard>
      <ArticleCard toggle={modalOpen}></ArticleCard>
      <ContactCard toggle={modalOpen}></ContactCard>
      <SocialCard></SocialCard>
      <CopyrightBar></CopyrightBar>
    </React.Fragment>
  );
}

export default App;
