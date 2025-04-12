import React from "react";
import { Collapse } from "../components/Collapse";
import { SlideShow } from "../components/SlideShow";
import "./About.scss";
import Banner from "../layout/Banner";

function About() {
  return (
    <>
      <Banner isAbout={true} />
      <div className="about__container">
        <Collapse title="Fiabilité" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
        <Collapse title="Respect" content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters" />
        <Collapse title="Service" content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old" />
        <Collapse title="Responsabilité" content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" />
      </div>
    </>
  );
}

export default About;
