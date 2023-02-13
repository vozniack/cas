import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../../modules/users/users.interface';

@Component({
  selector: 'cas-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  @Input()
  user!: User;

  @Input()
  size: 'small' | 'normal' | 'big' = 'normal';

  @Input()
  color: 'cyan' | 'green' | 'violet' | 'orange' | 'random' = 'cyan';

  @Input()
  tooltip: boolean = false;

  selectedColor!: string;

  ngOnInit(): void {
    let colors = ['cyan', 'green', 'violet', 'orange'];

    this.selectedColor = this.color == 'random' ? colors[~~(Math.random() * colors.length)] : this.color;
  }

  getUserInitials(): string {
    return this.user.firstName.charAt(0) + (this.user.lastName != undefined ? this.user.lastName.charAt(0) : '');
  }
}
