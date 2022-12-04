export interface TreeNode<T> {

  icon: string;

  label: string;

  description: string;

  badge: string;

  children: TreeNode<T>[];

  data: T;
}
