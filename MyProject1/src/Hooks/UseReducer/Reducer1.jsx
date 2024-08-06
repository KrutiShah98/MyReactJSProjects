import React, { useReducer } from 'react'

const initialState = 0;

const reducer = (state, action) => {
    switch (action) {
        case "INC1":
            return state + 1;
        case "INC10":
            return state + 10;
        case "INC100":
            return state + 100;
            default:
                return state;
    }
}

export default function Reducer1() {
    const [count,dispatch]=useReducer(reducer,initialState);
    return (

        <div>
            {count}
            <button onClick={()=>dispatch("INC1")}>Add + 1</button>
            <button onClick={()=>dispatch("INC10")}>Add + 10</button>
            <button onClick={()=>dispatch("INC100")}>Add + 100</button>

</div>
    )


}
