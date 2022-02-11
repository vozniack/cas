import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {fadeInAnimation} from "../../../animations/fade-in-animation";
import {Subject} from "rxjs";
import {tap} from "rxjs/operators";

@Component({
  selector: 'cas-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.scss'],
  animations: [fadeInAnimation]
})
export class TablePaginationComponent implements OnInit {

  @Input()
  pageSize?: number = 10;

  @Input()
  totalPages!: number;

  @Input()
  borderButtons: number = 1;

  @Input()
  reset!: Subject<any>;

  @Output()
  pageChange = new EventEmitter<number>();

  pages: number[] = [];

  page = 1;

  ngDestroyed$ = new Subject<boolean>();

  /* ng actions */

  ngOnInit(): void {
    setTimeout(() => this.countPages(false), 32);

    this.reset.pipe(
      tap(() => this.page = 1)
    ).subscribe()
  }

  /* Counter */

  countPages(emitChange: boolean): void {
    this.pages = [];

    let iterator = 0;
    for (let i = -(this.borderButtons); i < (this.borderButtons * 2) - (this.borderButtons - 1); i++) {
      this.pages[iterator++] = this.page + i;
    }

    if (emitChange) {
      this.pageChange.emit(this.page - 1);
    }
  }

  /* Page changes */

  firstPage(): void {
    this.page = 1;
    this.countPages(true);
  }

  prevPage(): void {
    if (this.canChangePrev(1)) {
      this.page--;
      this.countPages(true);
    }
  }

  nextPage(): void {
    if (this.canChangeNext(1)) {
      this.page++;
      this.countPages(true);
    }
  }

  lastPage(): void {
    this.page = this.totalPages;
    this.countPages(true);
  }

  changePage(page: number): void {
    if (this.page != page) {
      this.page = page;
      this.countPages(true);
    }
  }

  /* Conditions */

  canChangePrev(amount: number): boolean {
    return this.page - amount > 0;
  }

  canChangeNext(amount: number): boolean {
    return this.page + amount <= this.totalPages;
  }

  canShowPage(page: number): boolean {
    return page > 0 && page <= this.totalPages;
  }
}
