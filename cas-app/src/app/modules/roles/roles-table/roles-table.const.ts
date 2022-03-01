import {ColumnType, TableAction, TableColumn} from "../../../shared/components/table/table.interface";

export const roleColumns: TableColumn[] = [
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
    label: 'Organization',
    field: 'details.organizationCode',
    sortable: true,
    badge: 'dark'
  },
  {
    label: 'Updated at',
    field: 'updatedAt',
    sortable: true,
    type: ColumnType.DATE
  }
]

export const roleActions: TableAction[] = [
  {
    name: 'EDIT',
    icon: 'edit',
    theme: 'primary',
    custom: false
  },
  {
    name: 'VIEW',
    icon: 'eye',
    theme: 'secondary',
    custom: false
  }
]
