import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: "Counter",
    initialState: { countNumber: 1000, username: "aa" },
    reducers: {
        increment: (state, action) => {
            state.countNumber++;
        },
        decrement: (state, action) => {
            state.countNumber--;
        },
        inc_by_user: (state, action) => {
            console.log("action:", action);
            state.count += action.payload
        },
        updateUsername:(state,action)=>{
            state.username=action.payload;
        }
    }
})

export default counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions
