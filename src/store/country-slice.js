import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: [1],
  totalCountries: 0,
  shown: true
};
const countrySlice = createSlice({
  name: "country",
  initialState: initialState,
  reducers: {
    toggle(state) {
        state.shown = !state.shown
    },
    addCountry(state, action) {
      console.log(action);
      state.totalCountries++;
      state.countries.push(action.payload);
    },
    removeCountry(state, action) {
      state.totalCountries--;
      state.countries = state.countries.filter(
        (country) => country.id !== action.payload.id
      );
    },
  },
});
export const countryActions = countrySlice.actions;
export default countrySlice.reducer;
