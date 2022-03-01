import {ColumnType, TableAction, TableColumn} from "../../../shared/components/table/table.interface";

export const userColumns: TableColumn[] = [
  {
    label: 'First name',
    field: 'firstName',
    sortable: true
  },
  {
    label: 'Last name',
    field: 'lastName',
    sortable: true
  },
  {
    label: 'Email',
    field: 'email',
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

export const userActions: TableAction[] = [
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
