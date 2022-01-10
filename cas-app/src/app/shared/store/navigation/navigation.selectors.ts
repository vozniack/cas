import {createFeatureSelector, createSelector} from "@ngrx/store";

export const SELECT_NAVIGATION_STATE = createSelector(
  createFeatureSelector<any>('navigation'), state => state
)
