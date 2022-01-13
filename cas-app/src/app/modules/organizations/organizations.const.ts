import {ColumnType, TableColumn} from "../../shared/components/table/table.interface";

export const organizationColumns: TableColumn[] = [
  {
    label: 'Name',
    field: 'name',
    sortable: true
  },
  {
    label: 'Code',
    field: 'code',
    sortable: true,
    badge: 'primary'
  },
  {
    label: 'Description',
    field: 'description',
    sortable: true
  },
  {
    label: 'Scope',
    field: 'scope',
    badge: 'secondary'
  },
  {
    label: 'Updated at',
    field: 'updatedAt',
    sortable: true,
    type: ColumnType.DATE
  }
]
