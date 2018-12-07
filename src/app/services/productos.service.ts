import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: ProductoInterface[];

  constructor(private http: HttpClient ) {
    this.cargarProuctos();
   }

   private cargarProuctos() {
     this.http.get('https://angular-html-7ade1.firebaseio.com/productos_idx.json')
     .subscribe( (resp: ProductoInterface[]) => {
      this.productos = resp;
      this.cargando = false;
     });
   }

   getProducto( id: string) {
     return this.http.get(`https://angular-html-7ade1.firebaseio.com/productos/${ id }.json`);
   }
}
