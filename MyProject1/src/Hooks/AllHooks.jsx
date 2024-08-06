import React from 'react'
import Hook3 from './Hook3'
import Hook1 from './Hook1'
import UseRef1 from './UseRefEx/UseRef1'
import USeRef2 from './UseRefEx/USeRef2'
import Task1 from './UseRefEx/Task1'
import Ex1 from './UseContext/Ex1'
import ComponentEx1 from './UseContext/ComponentEx1'
import ThemeComponent1 from './UseContext/ThemeComponent1'
import ThemeComponent2 from './UseContext/ThemeComponent2'
import ParentComponent from './UseRefEx/ForwardRef/ParentComponent'
import UseMemoex1 from './UseMemo/UseMemoex1'

export default function AllHooks() {
  return (
    <div>
        <Hook3/>
        <Hook1/>
        {/* <UseRef1/> */}
        {/* <USeRef2/> */}
        {/* <Task1/> */}
        {/* <Ex1/> */}

        {/* <ComponentEx1/> */}
        {/* <ThemeComponent1>
          <ThemeComponent2/>
        </ThemeComponent1> */}
        {/* <ParentComponent/> */}
        {/* <UseMemoex1/> */}
    </div>
  )
}
