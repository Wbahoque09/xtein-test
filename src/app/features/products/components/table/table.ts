import { ChangeDetectionStrategy, Component, input, InputSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponseProducts } from '../../models/iproducts';

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Table { 
  readonly data: InputSignal<ResponseProducts[] | null> =
    input<ResponseProducts[]| null>(null);

  // Paginación
  protected readonly currentPage = signal(1);
  protected readonly itemsPerPage = signal(8);
  // protected readonly arrayHeaders: Signal<string> = computed(
  //   () => `${this.headers()!.header}`
  // );

  get paginatedData(): ResponseProducts[] {
    const start = (this.currentPage() - 1) * this.itemsPerPage();
    return this.data()!.slice(start, start + this.itemsPerPage());
  }

  get totalPages() {
    return Math.ceil(this.data()!.length / this.itemsPerPage());
  }

  get pageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  protected changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage.set(page);
    }
  }

  protected getStarRating(rate: number): string[] {
    return Array(5).fill('').map((_, i) => i < Math.floor(rate) ? '★' : '☆');
  }

  protected truncateText(text: string, length: number): string {
    return text.length > length ? text.substring(0, length) + '...' : text;
  }
}
