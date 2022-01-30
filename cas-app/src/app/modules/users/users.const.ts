import {ColumnType, TableAction, TableColumn} from "../../shared/components/table/table.interface";

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
    theme: 'primary'
  },
  {
    name: 'SHOW',
    icon: 'eye',
    theme: 'secondary'
  }
]
