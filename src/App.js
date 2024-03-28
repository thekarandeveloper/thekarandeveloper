import React from "react";
import Navbar from "./components/major/navbar.js";
import InfoCard from "./components/major/infoCard.js";
import ProfileCard from "./components/major/profileCard.js";
import ProjectCard from "./components/major/ProjectCard.js"
import ReviewCard from "./components/major/ReviewCard.js"
function Home() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default Home;
