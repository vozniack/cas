import {defaultActions} from '../../../shared/components/table/table-actions/table-actions.const';
import {ColumnType, TableAction, TableColumn} from '../../../shared/components/table/table.interface';

export const userColumns: TableColumn[] = [
  {
    label: 'Name',
    field: 'firstName',
    sortable: true,
    type: ColumnType.USER
  },
  {
    label: 'Status',
    field: 'active',
    sortable: true,
    type: ColumnType.ACTIVITY
  },
  {
    label: 'Organizations',
    field: 'organizations',
    sortable: false,
    type: ColumnType.ORGANIZATIONS
  },
  {
    label: 'Created at',
    field: 'createdAt',
    sortable: true,
    type: ColumnType.DATE
  },
  {
    label: 'Updated at',
    field: 'updatedAt',
    sortable: true,
    type: ColumnType.DATE
  }
]

export const userActions: TableAction[] = [
  ...defaultActions
]
