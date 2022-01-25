import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {fadeInAnimation} from "../../../animations/fade-in-animation";
import {Subject} from "rxjs";
import {takeUntil, tap} from "rxjs/operators";

@Component({
  selector: 'cas-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.scss'],
  animations: [fadeInAnimation]
})
export class TablePaginationComponent implements OnInit, OnDestroy {

  @Input()
  pageSize!: number;

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
    setTimeout(() => this.countPages(), 32);

    this.reset.pipe(
      takeUntil(this.ngDestroyed$),
      tap(() => this.page = 1)
    ).subscribe()
  }

  ngOnDestroy(): void {
    this.ngDestroyed$.next(true);
    this.ngDestroyed$.unsubscribe();
  }

  /* Counter */

  countPages(): void {
    this.pages = [];

    let iterator = 0;
    for (let i = -(this.borderButtons); i < (this.borderButtons * 2) - (this.borderButtons - 1); i++) {
      this.pages[iterator++] = this.page + i;
    }

    this.pageChange.emit(this.page - 1);
  }

  /* Page changes */

  firstPage(): void {
    this.page = 1;
    this.countPages();
  }

  prevPage(): void {
    if (this.canChangePrev(1)) {
      this.page--;
      this.countPages();
    }
  }

  nextPage(): void {
    if (this.canChangeNext(1)) {
      this.page++;
      this.countPages();
    }
  }

  lastPage(): void {
    this.page = this.totalPages;
    this.countPages();
  }

  changePage(page: number): void {
    if (this.page != page) {
      this.page = page;
      this.countPages();
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
