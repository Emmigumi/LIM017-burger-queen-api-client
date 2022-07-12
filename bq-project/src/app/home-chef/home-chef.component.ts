import { Component, OnInit } from '@angular/core';
import { order } from 'src/app/models/orders';
import { BdOrdersService } from 'src/app/services/bd-orders.service';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-chef',
  templateUrl: './home-chef.component.html',
  styleUrls: ['./home-chef.component.scss']
})
export class HomeChefComponent implements OnInit {
  listOrders: order[] = [];

  constructor( private bdordersService:  BdOrdersService, private toastr: ToastrService,private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
    this.getOrders();
  }
  getOrders(){
    this.bdordersService.getBdOrderService().subscribe(order => {
      (this.listOrders = order), console.log('esto devuelve getproduct', order);
      this.listOrders.sort((a, b) => <any> new Date(b.dataEntry) - <any> new Date(a.dataEntry));
      console.log("Soy la lista de ordenes",this.listOrders);
    }
    )
  }
/*   deleteOrder(order: order) {
    this.bdordersService.deleteBdOrderService(order).subscribe(() => {
      this.toastr.error('El producto fue eliminado con éxito', 'Producto Eliminado');
      this.listOrders = this.listOrders.filter(orderdelete => orderdelete.id !== order.id);
      console.log('El producto fue eliminado');
    },error => {console.log(error)})
  } */
  updateOrder(order: order) {
    console.log(order.status)
  
      console.log("Actualizo a delivery")
      const ORDERS: order = {
        id: order.id,
        status: "preparado",
        client: order.client,
        products: order.products,
        dataEntry: order.dataEntry,
        total: order.total,
      }
      this.bdordersService.editBdOrderService(ORDERS).subscribe(data => {
        this.toastr.success('La orden fue actualizada con éxito', 'Orden Actualizada');
        this.getOrders();
        console.log('Editado con éxito');
      })
  }
  
  logOut() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('id');
    localStorage.removeItem('email');
    this.cookieService.delete('roles_access');
    this.router.navigate(['/login']);
    this.toastr.success('Se cerro sesión con éxito', 'Cerrar Sesión');
  }
}