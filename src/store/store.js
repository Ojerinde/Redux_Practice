import { configureStore } from "@reduxjs/toolkit";
import countryReducer from './country-slice'


const store = configureStore({
    reducer: countryReducer
})

export default store