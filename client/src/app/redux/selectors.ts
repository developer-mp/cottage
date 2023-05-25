import { createSelector } from "reselect";
import { IRootAppState } from "../../typings";

const selectPropertyDeals = (state: IRootAppState) => state.propertyDeals;

export const makeSelectPropertyDeals = createSelector(
  selectPropertyDeals,
  (property) => property.propertyDeals
);
