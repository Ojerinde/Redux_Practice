import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: [],
  shown: true,
};
const countrySlice = createSlice({
  name: "country",
  initialState: initialState,
  reducers: {
    toggle(state) {
      state.shown = !state.shown;
    },
    addCountry(state, action) {
      state.countries = state.countries.concat(action.payload);
    },
    removeCountry(state, action) {
      state.countries = state.countries.filter(
        (country) => country.name !== action.payload
      );
    },
  },
});
export const countryActions = countrySlice.actions;
export default countrySlice.reducer;
