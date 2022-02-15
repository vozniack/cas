import {ListMapper} from "../../shared/components/list/list.mapper";
import {User} from "./users.interface";
import {ListNode} from "../../shared/components/list/list.interface";
import {Injectable} from "@angular/core";

@Injectable()
export class UsersMapper extends ListMapper<User> {

  mapToListNodes(users: User[]): ListNode<User>[] {
    return users.map(user => UsersMapper.mapToListNode(user))
  }

  private static mapToListNode(user: User): ListNode<User> {
    return {
      icon: 'user',
      label: `${user.firstName} ${user.lastName ? user.lastName : ''}`,
      description: user.email,
      badges: user.roles.map(role => role.name),
      data: user
    }
  }
}
