import {motion} from "framer-motion"

const transitionVariants = {
  initial:{
    x: "100%",
    width: "100%"
  },
  animate: {
    x: "0%",
    width: "0%"
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%" , "100%"],
  },
}

const Transition = () => {
  return (
    <>
      <motion.div className="fixed top-0 bottom-0 fight-full 
      w-screen h-screen z-20 bg-[#304385]"
       variants ={transitionVariants} 
       initial="initial"
      animate="animate" 
      exit="exit" 
      transition={{delay:0.3, duration: 0.5, ease: "easeInOut"}}
      >
        
      </motion.div>
       <motion.div className="fixed top-0 bottom-0 fight-full 
      w-screen h-screen z-10 bg-[#df2326]"
       variants ={transitionVariants} 
       initial="initial"
      animate="animate" 
      exit="exit" 
      transition={{delay:0.6, duration: 0.4, ease: "easeInOut"}}
      >
 </motion.div>

       <motion.div className="fixed top-0 bottom-0 fight-full 
      w-screen h-screen z-30 bg-[#cde230f1]"
       variants ={transitionVariants} 
       initial="initial"
      animate="animate" 
      exit="exit" 
      transition={{delay:0.4, duration: 0.5, ease: "easeInOut"}}
      >
</motion.div>
<motion.div className="fixed top-0 bottom-0 fight-full 
      w-screen h-screen z-30 bg-[#4e30e227]"
       variants ={transitionVariants} 
       initial="initial"
      animate="animate" 
      exit="exit" 
      transition={{delay:0.4, duration: 0.8, ease: "easeInOut"}}
      >
</motion.div>
      
    </>
  );
};

export default Transition;
