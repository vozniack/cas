import {createFeatureSelector, createSelector} from "@ngrx/store";

export const SELECT_APP_STATE = createSelector(
  createFeatureSelector<any>('app'), state => state
)

export const SELECT_PAGE_STATE = createSelector(
  SELECT_APP_STATE, state => state.page
)

export const SELECT_USER_STATE = createSelector(
  SELECT_APP_STATE, state => state.user
)

export const SELECT_USER_TOKEN = createSelector(
  SELECT_USER_STATE, state => state.token
)

export const SELECT_RESOURCE_STATE = createSelector(
  SELECT_APP_STATE, state => state.resource
)

export const SELECT_ACTIONS_STATE = createSelector(
  SELECT_APP_STATE, state => state.actions
)
