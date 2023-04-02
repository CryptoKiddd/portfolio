

import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "./hoc";
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          className="bg-tertiary rounded-[2px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col "
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px] font-bold text-center" > {title} </h3>
        </div>
      </motion.div>

    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] "
        variants={fadeIn("", "", 0.1, 1)}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur,
        nihil minima natus quidem magni vero recusandae, assumenda obcaecati sed
        eos vel, deserunt animi porro eaque ipsum autem doloribus sequi
        fugit.Rerum, suscipit reprehenderit esse ab iusto vero sequi. Quaerat,
        laudantium.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => {
          return <ServiceCard key={service.title} index={index} {...service} />;
        })}
      </div>
    </>
  );
};

export default SectionWrapper(About,'about')