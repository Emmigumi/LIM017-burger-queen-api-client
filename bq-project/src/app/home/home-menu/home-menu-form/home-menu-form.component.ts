import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BdProductService } from '../../../services/bd-product.service';
import { Products, ordersProduct } from '../../../models/products';
import { order } from '../../../models/orders';
import { BdOrdersService } from 'src/app/services/bd-orders.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-home-menu-form',
  templateUrl: './home-menu-form.component.html',
  styleUrls: ['./home-menu-form.component.scss']
})
export class HomeMenuFormComponent implements OnInit {
  listProductsOrder!: ordersProduct;
  productNew: ordersProduct[] = [];
  Products: Products[] = [];
  ordersForm: FormGroup;
  number: number = 0;
  title = 'Agregar Nueva Orden';
  dataOrder: string = new Date().toLocaleString();
  constructor(private fb: FormBuilder, private bdproductsService:  BdProductService, private bdordersService:  BdOrdersService, private toastr: ToastrService) {     
    this.ordersForm = this.fb.group({
      client: ['', Validators.required],
      dataEntry: [ this.dataOrder ],
    })
  }
  ngOnInit(): void {
    this.getProduct();
  }
  addOrders(){
    console.log("Soy oRDERRR",this.ordersForm);
    const ORDERS: order = {
      client: this.ordersForm.get('client')?.value,
      products: this.productNew,
      status: "Pending",
      dataEntry: this.ordersForm.get('dataEntry')?.value,
    }
    console.log(ORDERS);
    this.bdordersService.postBdOrderService(ORDERS).subscribe( () => {
      console.log('Producto agregado con éxito');
      this.toastr.success('El usuario fue agregado con éxito', 'Usuario Agregado');
    },error => {console.log(error)}
    )
  }
  //Obtiene un array de valores únicos del HomeMenuListComponent para recorrerlo en el html del homeMenuFormComponent
  getProduct() {
    this.bdproductsService.disparador.subscribe(data => {
      console.log('Recibiendo dataProduct:', data);
      this.productNew = data.dataProduct;
      console.log('Recibo esto', this.productNew)
    });
  }
}