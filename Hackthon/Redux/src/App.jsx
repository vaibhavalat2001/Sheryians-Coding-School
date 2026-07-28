import React, { useState } from 'react'
import {useSelector, useDispatch} from "react-redux"
import {decrement, increment, incrementByAmount} from "./redux/features/counterSlice"

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  let [num, setNum] = useState(1);
  
  return (
    <div className='p-10 flex gap-4 flex-col items-center h-screen bg-black text-white'>
      <h1 className='text-4xl'>{count}</h1>
      <div className='grid grid-cols-4 max-sm:grid-cols-2 gap-4'>
      <button onClick={() => dispatch(increment())} className='active:scale-90 bg-green-600 px-2  py-1 rounded text-xl font-bold'>Increment</button>
      <button onClick={() => dispatch(decrement())} className='active:scale-90 bg-red-600 px-2 py-1 rounded text-xl font-bold'>Decrement</button>
      <input onChange={(e) =>  setNum(e.target.value)} value={num}  type="number" className='bg-gray-400 text-white rounded px-2  text-4xl' placeholder='number' />
      <button onClick={() => dispatch(incrementByAmount(Number(num)))} className='bg-orange-600 rounded px-2 font-bold text-xl py-1'>Increase by amount</button>
      </div>
    </div>
  )
}

export default App
