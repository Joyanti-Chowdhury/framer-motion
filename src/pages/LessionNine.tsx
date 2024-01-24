import { motion ,inView, ElementOrSelector, useInView, useAnimate} from "framer-motion";
import { useEffect } from "react";


const LessionNine = () => {

    const [scope,animate] = useAnimate();
    // const handleOnClick =() =>{
    //    animate([
    //     [scope.current,{rotate:45}],
    //     // [scope.current,{opacity:0}],
    //     [scope.current,{rotate:45}],
    //     [scope.current,{opacity:1}],
    //     [scope.current,{rotate:90}],
    //     [scope.current,{x:200}],
    //     [scope.current,{x:-200}],
    //     [scope.current,{x:0}],
      
    //    ]);


    // }

       useEffect(()=>{


        animate([
            [scope.current,{rotate:45}],
            // [scope.current,{opacity:0}],
            [scope.current,{rotate:45}],
            [scope.current,{opacity:1}],
            [scope.current,{rotate:90}],
            [scope.current,{x:200}],
            [scope.current,{x:-200}],
            [scope.current,{x:0}],
          
           ]);

       },[])
  




    return (
        <div className="border border-black size-[600px] flex flex-col justify-center items-center">
        <div className="size-64 bg-indigo-700 rounded-lg flex flex-wrap gap-5 p-4 justify-center items-center"
        
       ref={scope}
    //    onClick={handleOnClick}
        
        ></div>
      
      
      
      </div>
    );
};

export default LessionNine;