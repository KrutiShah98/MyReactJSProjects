import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment } from './features/Counter';

export default function MainRedux() {
  let data = useSelector((state)=>{
    console.log("-> state:",state);
    return state.counterkey.countnumber;
  })

  let scoreData=useSelector((state)=>{
    return state.scorekey.score;
  })
  const dispatch =  useDispatch();

  const handleDynamic=()=>{
    dispatch(inc_by_user(100))
  }
  return (
    <div>
      <h1>Redux</h1>
      <button onClick={()=>dispatch(increment())}>INC+</button>
 <h1>Counter:{data}</h1>
      <button onClick={()=>dispatch(decrement())}>DEC+</button>
      <button onClick={()=>dispatch(handleDynamic())}>INC BY USER</button>

      <h1>Score:{scoreData}</h1>
    </div>
  )
}
