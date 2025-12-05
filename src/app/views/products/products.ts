import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../features/products/services/products';
import { ResponseProducts } from '../../features/products/models/iproducts';
import { toast } from 'ngx-sonner';
import { Table } from '../../features/products/components/table/table';


@Component({
  selector: 'app-products',
  imports: [Table],
  templateUrl: './products.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Products implements OnInit { 
  private productService = inject(ProductService);


  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.productService.getAllProducts().subscribe({
      next: (response) => {
        this.productService.products.set(response);
      },
      error: (err) => {
        toast.error('Error', {
          duration: 4000,
          description: `Ha ocurrrido un error, ${err}`,
        });
      },
    });
  }

  get products(): ResponseProducts[] {
    return this.productService.products()!;
  }
}
