import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {fadeInAnimation} from "../../../animations/fade-in-animation";

@Component({
  selector: 'cas-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.scss'],
  animations: [fadeInAnimation]
})
export class TablePaginationComponent implements OnChanges {

  @Input()
  pageSize!: number;

  @Input()
  totalPages!: number;

  @Input()
  borderButtons: number = 1;

  @Output()
  pageChange = new EventEmitter<number>();

  pages: number[] = [];

  page = 1;

  constructor() {
  }

  ngOnChanges(): void {
    this.countPages();
  }

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
