import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
import { Link } from "react-scroll";
const Hero = () => {
  const transition = { duration: 3, type: "spring" };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>

      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "178px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>THE BEST OF ITS KIND</span>
        </div>
        {/* Hero text */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Built </span>
            <span>Strong</span>
          </div>
          <div>
            <span>Lasts Long</span>
          </div>
          <div>
            <span>
              Swift Mobile smartphones are meticulously crafted to withstand the
              most extreme challenges. They're your reliable tools in demanding
              landscapes, where others falter.
            </span>
          </div>
        </div>
        {/* experience figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={8} start={0} delay={4} preFix="+" />
            </span>
            <span>GB OF RAM</span>
          </div>
          <div>
            <span>
              <NumberCounter end={64} start={0} delay={4} preFix="+" />
            </span>
            <span>Starting Storage</span>
          </div>
          <div>
            <span>
              <NumberCounter end={1080} delay={2} preFix="" />
            </span>
            <span>HD Display</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero-buttons">
          <button className="btn">Order Now</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      {/* Right Side */}
      <div className="right-h">
        <button className="btn">
          <Link to="join-us" smooth={true} spy={true}>
            Order Now
          </Link>
        </button>

        {/* heart rate */}
        {/* <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart </span>
          <span>116 bpm</span>
        </motion.div> */}

        {/* hero images */}
        <img className="hero-image" src={hero_image} alt="" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          className="hero-image-back"
          src={hero_image_back}
          alt=""
        />

        {/* calories */}
        <motion.div
          initial={{ right: "32rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Battery Capacity</span>
            <span>9 Hours</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
