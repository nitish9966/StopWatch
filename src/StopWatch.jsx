import { useEffect, useRef, useState } from "react";


function StopWatch(){

    const [isRunning,setisRunning]=useState(false)
    const [elapseTime,setElapseTime]=useState(0)

    useEffect(()=>{

    },[isRunning])

    const intervalTime=useRef()

    const startTime=useRef()

    function start(){

    }
    function stop(){

    }
    function reset(){

    }
    function formate(){
        return `00:00:00`
    }

    return(
        <div className="container">
            <div className="timer">{formate()}</div>
            <div className="controller">
                <button>Start</button>
                <button>Reset</button>
                <button>Stop</button>
            </div>
        </div>
    );
}

export default StopWatch;