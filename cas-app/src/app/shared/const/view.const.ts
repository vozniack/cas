import {ViewSelectOption} from "../components/common/data-toolbar/view-select/view-select.interface";
import {ViewType} from "../model/types.interface";

export const VIEW_TABLE: ViewSelectOption = {
  icon: 'table',
  viewType: ViewType.TABLE
}

export const VIEW_LIST: ViewSelectOption = {
  icon: 'list',
  viewType: ViewType.LIST
}

export const VIEW_GRID: ViewSelectOption = {
  icon: 'grid',
  viewType: ViewType.GRID
}

export const VIEW_TREE: ViewSelectOption = {
  icon: 'menu',
  viewType: ViewType.TREE
}
