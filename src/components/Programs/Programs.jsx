import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from '../../assets/rightArrow.png';
import { motion } from "framer-motion";
const Programs = () => {
  return (
    <div className="Programs" id='programs'>

        {/* programs header */}
      <div className="programs-header">
        <span className="stroke-text">Scegli</span>
        <span>il Programma</span>
        <span className="stroke-text">più adatto per te</span>
      </div>


      {/* programs-categories */}
      <div className="prgoram-categories">
        {programsData.map((program)=>(
            <motion.div
            whileHover={{background: 'var(--planCard)', cursor: 'pointer'}}
            transition={{type: 'spring'}}
            className="category">
                {program.image}
                <span>{program.heading}</span>
                <span>{program.details}</span>
                <div className="join-now">
                    <span>Iscriviti</span>
                    <img src={RightArrow} alt="" />
                </div>
            </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
