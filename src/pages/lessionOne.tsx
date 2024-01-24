// import'./LessonOne.css';
import { motion } from "framer-motion"
import { useRef } from "react"

const parent = {
  initial : { rotate:0 },
 animate :{ rotate:360 },

 hidden:{opacity:0 , scale:0.9},
 visible:{
    opacity:0.6 ,
     scale:1,
    transition:{ 
        ease:"easeInOut", 
        duration: 1,
        delayChildren: 0.5,
        staggerChildren:0.5
     }

},
hover:{
    opacity:1 ,
    //  scale:1,
        // transition:{
        //     duration:1,
        // },
    
},
tap:{ 
    scale:1 ,
    rotate:45,


},
}

const child = {
     hidden:{opacity:0 , scale:0.9},
 visible:{opacity:1 , scale:1}
}


const DragAria = () => {
   
}

const LessonOne = () => {
      
    const parentRef = useRef(null);

    return (
    
        <div 
        ref={parentRef}
        
        className="border border-red-500 size-[500px] flex justify-center items-center">
        <motion.div className="size-64 bg-indigo-700 rounded-lg flex flex-wrap gap-5 p-4 justify-center items-center"
        variants={parent}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
        drag
        dragSnapToOrigin
        dragElastic= {0.7}
        dragConstraints={parentRef}
       whileDrag={{ scale:1.1,
        boxShadow:"0px 10px 10px #000"
     }}


        // onHoverStart={() => console.log('hover')}
        // onHoverEnd={() => console.log('hovere')}
        // transition={{ duration: 2, type:"spring", repeat: Infinity, repeatType: 'reverse' }}
        
        
        >

            <motion.div className="size-20 bg-cyan-500 rounded-sm"
            variants={child}
            ></motion.div>
            <motion.div className="size-20 bg-cyan-500 rounded-sm"
            variants={child}
            ></motion.div>
            <motion.div className="size-20 bg-cyan-500 rounded-sm"
            variants={child}
            ></motion.div>
            <motion.div className="size-20 bg-cyan-500 rounded-sm"
            variants={child}
            ></motion.div>
                   
        </motion.div>
        </div>
    );
};

export default LessonOne;