import {createFeatureSelector, createSelector} from "@ngrx/store";

export const SELECT_USER_STATE = createSelector(
  createFeatureSelector<any>('user'), state => state
)

export const SELECT_USER_TOKEN = createSelector(
  SELECT_USER_STATE, state => state.token
)
