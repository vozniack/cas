export interface Pageable<T> {

  content?: T[];

  totalElements?: number;
  totalPages?: number;
}

export interface PageRequest {

  page: number;

  size: number;
}
