import {ColumnType, TableAction, TableColumn} from "../../../shared/components/table/table.interface";

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
    label: 'Updated at',
    field: 'updatedAt',
    sortable: true,
    type: ColumnType.DATE
  }
]

export const organizationActions: TableAction[] = [
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
