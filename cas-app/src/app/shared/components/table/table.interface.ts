export interface TableColumn {

  label: string;

  field: string;

  sortable?: boolean;

  type?: ColumnType;

  badge?: BadgeType;
}

export enum ColumnType {
  TEXT = 'TEXT',
  ACTIVITY = 'ACTIVITY',
  DATE = 'DATE',
  USER = 'USER'
}

export type BadgeType = 'default' | 'cyan' | 'violet' | 'green' | 'orange'

export interface TableAction {

  name: 'EDIT' | 'VIEW' | string;

  icon: string;

  theme: 'default' | 'primary' | 'secondary';

  data?: any;

  custom: boolean;
}
