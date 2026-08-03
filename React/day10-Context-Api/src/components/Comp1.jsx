import React from 'react'
import Comp2 from './Comp2'
import NestedComp from './NestedComp'

const Comp1 = () => {
  return (
    <div>
      Component 1
      <Comp2/>
    </div>
  )
}

export default Comp1
