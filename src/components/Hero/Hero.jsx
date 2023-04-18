import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
import {Link} from 'react-scroll'
const Hero = () => {
  const transition = { duration: 3, type: "spring" };
  const mobile = window.innerWidth<=768? true:false;
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>

      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{left: mobile? "178px": '238px' }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>IL MIGLIOR FITNESS CLUB DELLA CITTÀ</span>
        </div>
        {/* Hero text */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">forma </span>
            <span>il tuo</span>
          </div>
          <div>
            <span>corpo perfetto</span>
          </div>
          <div>
            <span>
            Noi ti aiuteremo a modellare e costruire il tuo corpo ideale e
              vivere la tua vita al massimo
            </span>
          </div>
        </div>

        {/* experience figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay={4} preFix="+" />
            </span>
            <span>coachs esperti</span>
          </div>
          <div>
            <span>
              <NumberCounter end={978} start={878} delay={4} preFix="+" />
            </span>
            <span>Membri iscritti</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} delay={2} preFix="+" />
            </span>
            <span>Programmi fitness</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero-buttons">
          <button className="btn">Iniziamo</button>
          <button className="btn">Scopri di più</button>
        </div>
      </div>

      {/* Right Side */}
      <div className="right-h">
        <button className="btn">
          <Link to = 'join-us' smooth={true} spy={true}>
          Iscriviti
          </Link>
          </button>

        {/* heart rate */}
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Battiti cardiaci</span>
          <span>116 bpm</span>
        </motion.div>

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
            <span>Calorie bruciate</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
