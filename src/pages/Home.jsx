import React from "react";
import MapComponent from "../components/ui/Map/MapComponent";
import Catalogs from "../components/ui/catalog/Catalogs";
import Videos from "../components/ui/videoss/Videos";
import Services from "../components/ui/services/Services";
import OurTeam from "../components/ui/ourTeam/OurTeam";
import Stats from "../components/ui/stats/Stats";
import Clients from "../components/ui/clients/Clients";
import Contact from "../components/ui/contact/Contact";
import Intro from "../components/ui/intro/Intro";
import Comments from "../components/ui/comments/Comments";

const Home = () => {
  return (
    <>
      <Intro />
      <MapComponent />
      <Catalogs />
      <Videos />
      <Services />
      <OurTeam />
      <Stats />
      <Clients />
      <Contact />
      <Comments />
    </>
  );
};

export default Home;
