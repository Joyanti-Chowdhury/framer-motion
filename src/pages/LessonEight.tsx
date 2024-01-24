import { motion ,inView, ElementOrSelector, useInView} from "framer-motion";
import { useEffect, useRef } from "react";

const LessonEight = () => {

const ref = useRef<HTMLDivElement>(null);

const inView = useInView(ref,{once:true});

//    useEffect(() => {
//          inView(ref.current as ElementOrSelector,(info) => {
//             console.log('inview',info)
//          })
//    }
   
//     ,[])


    return (
        <div className="border border-black size-[600px] flex flex-col justify-center items-center">
        <motion.div className="size-64 bg-indigo-700 rounded-lg flex flex-wrap gap-5 p-4 justify-center items-center"
        
         ref={ref}
        animate={inView ? 
            {opacity : 1, x :0 , transition:{delay:0.7}} 
            : {opacity : 0 ,x  : -500}}
        
        ></motion.div>
      
      
      
      </div>
    );
};

export default LessonEight;