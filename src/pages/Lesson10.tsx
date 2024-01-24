import { motion, useDragControls} from "framer-motion";


const Lesson10 = () => {
    const controls = useDragControls();
    return (
        <div className="border border-red-500 size-[600px] flex flex-col justify-center items-center">
      <div 
        onPointerDown={(e) => controls.start(e)}
        className="w-64   h-20 bg-indigo-700 rounded-lg flex flex-wrap gap-5 p-4 justify-center items-center"
        
      
   
        ></div>
      <motion.div 
      
        className="size-64 bg-indigo-700 rounded-lg flex flex-wrap gap-5 p-4 justify-center items-center"
        drag= "x"
        dragControls={controls}
      
   
        ></motion.div>
      
        
      
      </div>
    );
};

export default Lesson10;
