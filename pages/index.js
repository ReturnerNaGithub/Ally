import Image from "next/image";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import {motion} from "framer-motion";

import {fadeIn} from "../variants";


const Home = () => {
  return (
  <div className="bg-primary/60 h-full">
  {/*text*/}
  <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 
  to black/10">
</div>
  {/*image*/}
  <div className="w-[1200px] h-full absolute right-0 bottom-0">
{/*bg img*/}
<div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right
xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0">

</div>
  
  {/*particles*/}
<ParticlesContainer />

{/*avatar img*/}
<motion.div
variants={fadeIn("up", 0.6)}
  initial="hidden"
  animate="show"
  exit="hidden"
  transition={{duration:1, ease: "easeInOut"}} 
  className="w-full h-full max-w-[300px] max-h-[200px] absolute -bottom-32
lg:bottom-16 lg:right-[13%]">
  <Avatar />
</motion.div>


<div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left
h-full container mx-auto">
  {/*title*/}
  <motion.h1 variants={fadeIn("down", 0.5)}
  initial="hidden"
  animate="show"
  exit="hidden"
  className="h1">
  Transforming <span className="text-accent">YOUR</span> imaginations <br/> Into{""} 
  <span className="text-accent">Digital Art</span>
  </motion.h1>
  {/*subtitle*/}
  <motion.p variants={fadeIn("down", 0.6)}
  initial="hidden"
  animate="show"
  exit="hidden"
  className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16" >
   In the realm of digital artistry, where pixels dance to the rhythm of creativity,
    there exists a unique artist who has mastered the craft of blending technology and imagination.
    It delves into the fascinating world of an art designer who harnesses the power of Blender, Mixamo, Spline,
    Krita, and a distinctive personal style to create mesmerizing 2D and 3D masterpieces.
  </motion.p>
  {/*btn*/}
  <div className="flex justify-center xl:hidden relative">
  <ProjectsBtn />
  </div>
  <motion.div variants={fadeIn("down", 0.7)}
  initial="hidden"
  animate="show"
  exit="hidden"
  className="hidden xl:flex"
  >
    <ProjectsBtn />
  </motion.div>

  
  
  Home</div>
</div>
</div>
);
};
export default Home;
