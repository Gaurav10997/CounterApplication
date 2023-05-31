
import './App.css';
import Counter from './Counter';
import { useState , useEffect } from 'react';
function App() {
  const [count , setcount] = useState(0)
  const handleIncrement = () =>{
    setcount((prev) => {
      if(prev<100){
        return prev +1
      }
      return prev
    })
  }

  const handleDecrement = () =>{
    setcount((prev) => {
      if(prev>0){
        return prev -1
      }
      alert(`value can't go below Zero`)
      return prev
    })
  }

  const handleReset = () =>{
    setcount(0)
  }
  useEffect(()=>{
    console.log('count : ',count)
  },[count])

  return (
    <div className="App">
     <Counter  increment={handleIncrement} decrement = {handleDecrement} count ={count} reset ={handleReset}></Counter>
    </div>
  );
}

export default App;
