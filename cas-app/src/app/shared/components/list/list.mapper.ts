import {ListNode} from "./list.interface";

export abstract class ListMapper<T> {

  abstract mapToListNodes(data: T[]): ListNode<T>[];
}
