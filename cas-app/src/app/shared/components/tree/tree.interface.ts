export interface TreeNode<T> {

  label: string;

  description: string;

  badge: string;

  children: TreeNode<T>[];

  data: T;
}
