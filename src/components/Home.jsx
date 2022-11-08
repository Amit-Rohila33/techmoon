import React from "react";
import "../styles/home.scss";
import vg from "../assets/4.jpg";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Techmoon</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="FGraphics" />
        <div>
          <p>
            The rich and interactive experiences we have come to expect on
            mobile apps have created new standards and expectations for all
            digital media including the web. 
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            placeat quisquam quidem odit eligendi sequi error eos, sit iure,
            quis mollitia beatae! Qui molestias nisi voluptas? Eum voluptate
            voluptatum modi autem perspiciatis illo fugiat, quam repudiandae
            accusantium atque ullam laudantium, sint excepturi quis voluptatibus
            id esse porro tempore maxime exercitationem officia dicta reiciendis
            dignissimos quos. 
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
            <div style={{ animationDelay: "0.9s" }}>
              <AiFillYoutube />
              <p>You Tube</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
