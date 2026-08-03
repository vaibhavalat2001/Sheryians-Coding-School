import React, { useContext } from 'react'
import { MyStore } from '../context/MyContext'

const Comp4 = () => {
    const {data, cart} = useContext(MyStore);
    console.log(data, cart)
  return (
    <div>
      Components 4 inside comp 3 {data}
    </div>
  )
}

export default Comp4
