import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { DataPublicServices } from '../../features/data-table/services/dataPublicServices';
import { toast } from 'ngx-sonner';
import { TablaApiPublic } from '../../features/data-table/components/tabla-api-public/tabla-api-public';

@Component({
  selector: 'app-data-public-views',
  imports: [TablaApiPublic],
  templateUrl: './data-public-views.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataPublicViews implements OnInit { 
  private dataTableService = inject(DataPublicServices);

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.dataTable();
  } 

  dataTable() {
    this.dataTableService.getDataTable().subscribe({
      next: (response) => {
        // console.log(response); 
        this.dataTableService.dataTable.set(response);
      },
      error: (err) => {
        toast.error('Error', {
          duration: 4000,
          description: `Ha ocurrrido un error, ${err}`,
        });
      }
    });
  }

  get dataApi() {
    return this.dataTableService.dataTable()?.data;
  }
  
}
