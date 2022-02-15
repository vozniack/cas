import {TreeNode} from "./tree.interface";

export abstract class TreeMapper<T> {

  abstract mapToTreeNodes(data: T[]): TreeNode<T>[];
}
