import { configureStore } from "@reduxjs/toolkit";
import Counter from "../features/Counter";
import { Score } from "@mui/icons-material";

export const store = configureStore({
    reducer :{
        counterkey: Counter,
        scorekey: Score
    }
})
