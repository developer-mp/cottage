import { createSlice } from "@reduxjs/toolkit";
import { IPropertyDealsState } from "../interfaces/type";

const initialState: IPropertyDealsState = {
  propertyDeals: [],
};

const propertyDealsSlice = createSlice({
  name: "propertyDeals",
  initialState,
  reducers: {
    setPropertyDeals: (state, action) => {
      state.propertyDeals = action.payload;
    },
  },
});

export const { setPropertyDeals } = propertyDealsSlice.actions;
export default propertyDealsSlice.reducer;
