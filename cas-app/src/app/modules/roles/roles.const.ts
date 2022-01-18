import {ColumnType, TableAction, TableColumn} from "../../shared/components/table/table.interface";

export const roleColumns: TableColumn[] = [
  {
    label: 'Name',
    field: 'name',
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

export const roleActions: TableAction[] = [
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
