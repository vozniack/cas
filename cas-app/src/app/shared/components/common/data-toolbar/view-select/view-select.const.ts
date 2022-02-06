import {ViewSelectOption} from "./view-select.interface";
import {ViewType} from "../../../../model/types.interface";

export const views: ViewSelectOption[] = [
  {
    icon: 'columns',
    viewType: ViewType.TABLE
  },
  {
    icon: 'list',
    viewType: ViewType.LIST
  }
]
