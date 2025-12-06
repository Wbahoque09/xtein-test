import { ChangeDetectionStrategy, Component, input, InputSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataModelResponse } from '../../models/idatapublic';

@Component({
  selector: 'app-tabla-api-public',
  imports: [CommonModule],
  templateUrl: './tabla-api-public.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TablaApiPublic {
  readonly data: InputSignal<DataModelResponse[] | null> =
    input<DataModelResponse[] | null>(null);

  // Paginación
  protected readonly currentPage = signal(1);
  protected readonly itemsPerPage = signal(10);

  get paginatedData(): DataModelResponse[] {
    const list = this.data() || [];
    const start = (this.currentPage() - 1) * this.itemsPerPage();
    return list.slice(start, start + this.itemsPerPage());
  }

  get totalPages(): number {
    const list = this.data() || [];
    return Math.max(1, Math.ceil(list.length / this.itemsPerPage()));
  }

  get pageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  protected changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage.set(page);
    }
  }

  protected truncate(text: string, length = 60) {
    if (!text) return '';
    return text.length > length ? text.slice(0, length) + '...' : text;
  }
}
