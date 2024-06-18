import { useEffect, useRef, useState } from "react";


function StopWatch(){

    const [isRunning,setisRunning]=useState(false)
    const [elapseTime,setElapseTime]=useState(0)
    const intervalIdRef=useRef(null)
    const startTimeRef=useRef(0)

    useEffect(()=>{

        if(isRunning){
            intervalIdRef.current=setInterval(()=>{
                setElapseTime(Date.now()-startTimeRef.current)
            },10);
        }
        return(()=>{
            clearInterval(intervalIdRef.current)
        })
    },[isRunning])

   

    function start(){
        setisRunning(true);
        startTimeRef.current=new Date()-elapseTime;
        // console.log(startTimeRef.current)
    }
    function stop(){
        setisRunning(false)
    }
    function reset(){
        setElapseTime(0)
        setisRunning(false)
    }
    function formate(){
        let hours=Math.floor(elapseTime/(1000*60*60))
        let minutes=Math.floor(elapseTime/(1000*60)%60)
        let seconds=Math.floor(elapseTime/(1000)%60)
        let milliseconds=Math.floor((elapseTime%1000)/10)

        hours=String(hours).padStart(2,"0");
        minutes=String(minutes).padStart(2,"0");
        seconds=String(seconds).padStart(2,"0");
        milliseconds=String(milliseconds).padStart(2,"0");

        return `${minutes}:${seconds}:${milliseconds}`
    }

    return(
        <div className="container">
            <div className="timer">{formate()}</div>
            <div className="controller">
                <button className="start-b" onClick={start}>Start</button>
                <button className="stop-b" onClick={stop}>Stop</button>
                <button className="reset-b" onClick={reset}>Reset</button>

            </div>
        </div>
    );
}

export default StopWatch;