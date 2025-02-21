import { useState } from 'react'
import './App.css'

function App() {
  const[numb,setNumb]=useState("")

  const handleClick=(e)=>{
    setNumb(numb.concat(e.target.name))
  }
  const clear=()=>{
    setNumb("")
  }
  const backSpace=()=>{
    setNumb(numb.slice(0,-1))
  }
  const calculate=()=>{
    try {
      setNumb(eval(numb).toString())      
    } catch (error) {
      setNumb(error);
    }
  }

  return (
    <>
      <div className="container">
        <form>
          <input type="text" value={numb}  />
        </form>
        <div className="keypad">
          <button  className='highlight' id='clear' style={{background:"#f85046"}} onClick={clear}>AC</button>
          <button className='highlight'  id='backSpace' style={{background:"#f85046"}} onClick={backSpace}>C</button>
          <button className='highlight'  style={{background:"#f85046"}} name='/' onClick={handleClick}>&divide;</button>
          <button name='7' onClick={handleClick}>7</button>
          <button name='8' onClick={handleClick}>8</button>
          <button name='9' onClick={handleClick}>9</button>
          <button  className='highlight' style={{background:"#f85046"}} name='*' onClick={handleClick}>&times;</button>
          <button name='4' onClick={handleClick}>4</button>
          <button name='5' onClick={handleClick}>5</button>
          <button name='6' onClick={handleClick}>6</button>
          <button className='highlight' style={{background:"#f85046"}}  name='-' onClick={handleClick}>&ndash;</button>
          <button name='1' onClick={handleClick}>1</button>
          <button name='2' onClick={handleClick}>2</button>
          <button name='3' onClick={handleClick}>3</button>
          <button  className='highlight' style={{background:"#f85046"}} name='+' onClick={handleClick}>+</button>
          <button name='0' onClick={handleClick}>0</button>
          <button name='.' onClick={handleClick}>.</button>
          <button className='highlight' style={{background:"#f85046"}}  id='result' onClick={calculate}>=</button>
        </div>
      </div>
    </>
  )
}

export default App
