import React, { memo } from 'react'
import Component1 from './Component1';

function Component2({mylist,addRecord}){
    console.log("Comp 2 is calling");
}

  return (
    <div>
        {mylist.map((value,index)=>{
            return <h4 key={index}>{value}</h4>
        })}

        <button onClick={addRecord}>Add record</button>
    </div>
  )
}
export default memo(Component1)

