import React from "react";

const ChildComponent=React.forwardRef((props,ref)=>{
    return(
        <div>
            <input type="text" ref={ref} placeholder="Enter name in child"/>
        </div>
    )

})
export default ChildComponent;