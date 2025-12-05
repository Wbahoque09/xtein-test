import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ClientServices } from '../../services/clientServices';
import { NgClass } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { toast } from 'ngx-sonner';
import { ClientsInterface } from '../../interfaces/clients';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-form-client',
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './form-client.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormClient {
  private clientService = inject(ClientServices);
  private formBuilder = inject(FormBuilder);
  protected isLoading = signal(false);

  formProducts = this.formBuilder.group({
    nit: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9\-]+$/)
    ]),
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]),
    address: new FormControl('', [Validators.required]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9+\s\-()]+$/)
    ]),
  });

  get nit() {
    return this.formProducts.get('nit');
  }
  get name() {
    return this.formProducts.get('name');
  }
  get address() {
    return this.formProducts.get('address');
  }
  get phone() {
    return this.formProducts.get('phone');
  }

  saveClient() {
    // Limpiar mensajes previos

    if (this.formProducts.invalid) {
      this.formProducts.markAllAsTouched();
      toast.error('Por favor, completa todos los campos correctamente.');
      return;
    }

    this.isLoading.set(true);
    const payload: ClientsInterface = {
      id: uuidv4(),
      nit: this.nit?.value || '',
      name: this.name?.value || '',
      address: this.address?.value || '',
      phone: this.phone?.value || '',
    }

    this.clientService.saveClient(payload).subscribe({
      next: () => {
        toast.success('Exitoso:', {duration: 3000, description:'Cliente guardado exitosamente'} );
        this.resetForm();
        this.isLoading.set(false);
      },
      error: (error: any) => {
        // console.log(error);
        this.isLoading.set(false);
        toast.error('Error al guardar cliente:', {duration: 3000, description: error.message} );
      }
    });

  }

  resetForm() {
    this.formProducts.reset();
  }
}
