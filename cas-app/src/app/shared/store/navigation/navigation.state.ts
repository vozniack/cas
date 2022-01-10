import {dashboardState} from "./navigation.const";

export interface SimpleNavigationState {

  title: string;

  subtitle: string;
}

export interface NavigationState extends SimpleNavigationState {

  icon: string;

  link: string;
}

export const initializeNavigationState = (): SimpleNavigationState => dashboardState
