import './App.css';
import { useEffect, useState } from 'react';

function App() {



  const [started,setStarted] = useState(false);
  const [timer,setTimer] = useState(0);


  

  useEffect(()=>{
    let interval = null;
    if(started)
    interval = setInterval(()=>{setTimer(timer=> timer+1);},1000);
    else
    if(!started && timer !== 0)
    clearInterval(interval);

    return () => clearInterval(interval);

  },[started,timer]);
  
  const ResetTimer  = () => {
      setStarted(false);
      setTimer(0);
  }

  const formatTimer = (t) => {
      let str;
      let hours =Math.floor(t/3600);
      let minutes = Math.floor(t/ 60);
      let sec = t % 60;
      if(hours < 10) str = "0"+hours;
      else str = hours.toString();
      if(minutes<10) str = str + ":0"+minutes;
      else str = str + ":" + minutes;
      if(sec < 10) str = str + ":0" + sec;
      else str = str +":"+ sec;
      return str;
  }


  return (
    <div className="App h-screen bg-[#012E40]  ">
        <div className='flex h-screen align-center items-center justify-center flex-col'>
          <h1 className='text-6xl shadow-md bg-[#3CA6A6] rounded-xl p-3 text-[#F2E3D5] text-3xl '>{formatTimer(timer)}</h1>
          <div className='mt-4'>
              <button onClick={()=>setStarted(!started)}className='mr-3 text-[#F2E3D5] bg-[#024959] p-2 hover:bg-[#026773]'>{started?'Pause':'Start'}</button>
              <button onClick={ResetTimer} className='ml-3 text-[#F2E3D5] bg-[#024959] p-2 hover:bg-[#026773]'>Reset</button>
          </div>

        </div>
          
    </div>
  );
}

export default App;
