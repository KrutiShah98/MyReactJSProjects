import React, { memo } from 'react'


function Component1() {
    console.log("COmponent ");
}

return (
    <div> my Component1</div>
)

export default memo(Component1)

