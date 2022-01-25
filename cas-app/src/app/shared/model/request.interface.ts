import {ScopeType} from "./types.interface";

export interface RequestParam {

  search?: string;

  scope?: ScopeType;

  page: number;

  size: number;

  sort?: SortRequest;
}

export interface SortRequest {

  field: string;

  direction: SortDirection;
}

export enum SortDirection {
  ASC = 'ASC',
  DESC = 'DESC'
}
