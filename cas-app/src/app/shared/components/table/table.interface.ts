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
  'secondary';
