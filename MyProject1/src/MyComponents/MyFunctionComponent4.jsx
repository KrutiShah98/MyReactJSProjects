import React from 'react'
import MyFunctionComponent3 from './MyFunctionComponent3';

import React from 'react'

export default function MyFunctionComponent4() {
    const l1 = [1,2,3]
  return (
    <div>

        {
            l1.map((e,i)=>{
                return <MyFunctionComponent3/>
            })
        }
    </div>
  )
}
