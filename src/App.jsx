import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, haddleInputToplama, haddleInputCix, haddleInputVur, haddleInputBol ,resetCount } from './counterSlice'

export function Counter() {
  const [inp, setinp] = useState("")
  const count = useSelector((state) => state.buadlazim_deyil.value)
  const dispatch = useDispatch()

  const handleButtonClick = (operation) => {
    dispatch(operation(+inp));
    setinp(""); 
  };

  return (
    <div>
      <div>
      <button onClick={() => dispatch(resetCount())}>C</button>
       
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <input type="text" value={inp} onChange={(e) => setinp(e.target.value)} />
        <button onClick={() => handleButtonClick(haddleInputToplama)}>topla</button>
        <button onClick={() => handleButtonClick(haddleInputCix)}>cix</button>
        <button onClick={() => handleButtonClick(haddleInputVur)}>vur</button>
        <button onClick={() => handleButtonClick(haddleInputBol)}>bol</button>
      </div>
    </div>
  )
}
