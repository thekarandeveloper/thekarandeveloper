import React from "react";
import Navbar from "../components/navbar";
import InfoCard from "../components/infoCard";
import ProfileCard from "../components/profileCard";
function Home() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <section className="home">
        <InfoCard></InfoCard>
        <ProfileCard></ProfileCard>
      </section>
    </React.Fragment>
  );
}

export default Home;
