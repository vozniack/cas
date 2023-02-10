import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Toast} from './toaster.interface';
import {ToasterService} from './toaster.service';

@Component({
  selector: 'cas-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss'],
})
export class ToasterComponent implements OnInit {

  toasts: Toast[] = [];

  constructor(private toastService: ToasterService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.toastService.toasts$.subscribe((toast: Toast) => {
      if (this.toasts.length > 2) {
        this.toasts.splice(0, 1);
      }

      this.toasts.push({
        message: toast.message,
        style: toast.style
      });

      this.cdr.detectChanges();
    });
  }

  onDismiss(index: number): void {
    this.toasts.splice(index, 1);
    this.cdr.detectChanges();
  }
}
