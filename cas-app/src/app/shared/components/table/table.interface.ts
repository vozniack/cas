export interface TableColumn {

  label: string;

  field: string;

  sortable?: boolean;

  type?: ColumnType;

  badge?: BadgeType;
}

export enum ColumnType {
  TEXT = 'TEXT',
  DATE = 'DATE'
}

export type BadgeType =
  'primary' |
  'secondary' |
  'light' |
  'dark';

export interface TableAction {

  name: 'EDIT' | 'VIEW' | string;

  icon: string;

  theme: 'primary' | 'secondary' | 'dark';

  data?: any;

  custom: boolean;
}
