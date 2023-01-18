import {ColumnType, TableAction, TableColumn} from "../../../shared/components/table/table.interface";
import {defaultActions} from '../../../shared/components/table/table-actions/table-actions.const';

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
  ...defaultActions
]
