import {ColumnType, TableColumn} from "../../shared/components/table/table.interface";

export const organizationColumns: TableColumn[] = [
  {
    label: 'Name',
    field: 'name'
  },
  {
    label: 'Code',
    field: 'code',
    badge: 'primary'
  },
  {
    label: 'Description',
    field: 'description'
  },
  {
    label: 'Scope',
    field: 'scope',
    badge: 'secondary'
  },
  {
    label: 'Updated at',
    field: 'updatedAt',
    type: ColumnType.DATE
  }
]
