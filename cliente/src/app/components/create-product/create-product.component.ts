import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService) { 
    this.productForm = this.fb.group({
      videogame:['', Validators.required],
      category:['', Validators.required],
      developer:['', Validators.required],
      console:['', Validators.required],
      price:['', Validators.required],
    })


  }

  ngOnInit(): void {
  }

  addProduct(){
    console.log(this.productForm)

    const PRODUCT: Product = {
      name: this.productForm.get('videogame')?.value,
      category: this.productForm.get('category')?.value,
      developer: this.productForm.get('developer')?.value,
      console: this.productForm.get('console')?.value,
      price: this.productForm.get('price')?.value,
    }
    this.toastr.success('El producto fue registrado con Exito!', 'Producto Registrado!');
    this.router.navigate(['/']);
  }

}
