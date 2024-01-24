import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
const LessonSix = () => {
  const controls = useAnimationControls();
  const [toggle,setToggle ] =  useState(false)


  const handleToggle = () => {
        controls.start({x: 200});

        setToggle(!toggle)
        if(toggle){
          controls.start({x: 200});
        }else{
          controls.start({x: -200});
        }
  }
  // const handleForward = () => {
  //       controls.start({x: 200});
  // }
  const handleBackward = () => {
    
  }
  

useEffect(() => {
  controls.start((i)=>({ x: 200,transition:{delay: i * 1} }))
},[])




  return (
    <div 
    onMouseEnter={() => controls.stop()}
    
    onMouseLeave={() => controls.start(({ x: 200,transition:{delay: 1} }))}

    className="border border-red-500 size-[600px] flex flex-col justify-center items-center">
     
        <button  onClick={handleToggle}
        className="bg-green-500 px-5 py-3 mb-10 ">handleToggle</button>
        <button  onClick={handleBackward}
        className="bg-green-500 px-5 py-3 mb-10 ">Backward</button>

      <motion.div className="size-64 bg-indigo-700 rounded-lg flex flex-wrap gap-5 p-4 justify-center items-center"
      animate= {controls}
      custom={1}
      onClick={() => controls.stop()}
      ></motion.div>
      <motion.div className="size-64 bg-indigo-700 rounded-lg flex flex-wrap gap-5 p-4 justify-center items-center"
      animate= {controls}
      custom={2}
      ></motion.div>
      <motion.div className="size-64 bg-indigo-700 rounded-lg flex flex-wrap gap-5 p-4 justify-center items-center"
      animate= {controls}
      custom={3}
      ></motion.div>
     
    </div>
  );
};

export default LessonSix;
