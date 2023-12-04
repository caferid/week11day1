import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,haddleInputToplama,haddleInputCix,haddleInputVur,haddleInputBol} from './counterSlice'

export function Counter() {
  const [inp, setinp] = useState("")
  const count = useSelector((state) => state.buadlazim_deyil.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
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
        <input type="text"  value={inp} onChange={(e) => setinp(e.target.value)}/>
        <button  onClick={(e) => dispatch(haddleInputToplama(+inp))}>topla</button>
        <button  onClick={(e) => dispatch(haddleInputCix(+inp))}>cix</button>
        <button  onClick={(e) => dispatch(haddleInputVur(+inp))}>vur</button>
        <button  onClick={(e) => dispatch(haddleInputBol(+inp))}>bol</button>
      </div>
    </div>
  )
}
