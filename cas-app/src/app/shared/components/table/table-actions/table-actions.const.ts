import {TableAction} from '../table.interface';

export const defaultActions: TableAction[] = [
  {
    name: 'VIEW',
    icon: 'eye',
    theme: 'primary',
    custom: false
  },
  {
    name: 'REMOVE',
    icon: 'trash',
    theme: 'secondary',
    custom: false
  }
]
