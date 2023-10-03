import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/about.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut culpa ab
          rem voluptate vero dolor corrupti, autem at aliquam, accusamus
          quisquam consequuntur assumenda, possimus delectus repellat id. Neque,
          dolores explicabo?Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Pariatur perferendis mollitia ipsam exercitationem debitis animi
          aliquam voluptates nostrum, minima dicta provident! Dolores blanditiis
          provident voluptatibus unde et hic odio exercitationem.
        </p>
      </div>
    </div>
  );
}

export default About;
