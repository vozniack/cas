import {defaultActions} from '../../../shared/components/table/table-actions/table-actions.const';
import {ColumnType, TableAction, TableColumn} from '../../../shared/components/table/table.interface';

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
    badge: 'cyan'
  },
  {
    label: 'Description',
    field: 'description',
    sortable: true
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
];

export const organizationActions: TableAction[] = [
  ...defaultActions
];
