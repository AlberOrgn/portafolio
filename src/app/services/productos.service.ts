import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: ProductoInterface[] = [];
  productosFiltrado: ProductoInterface[] = [];

  constructor(private http: HttpClient ) {
    this.cargarProuctos();
   }

   private cargarProuctos() {

    return new Promise( (resolve , reject) => {
      this.http.get('https://angular-html-7ade1.firebaseio.com/productos_idx.json')
     .subscribe( (resp: ProductoInterface[]) => {
      this.productos = resp;
      this.cargando = false;
      resolve();
     });
    });
   }

   getProducto( id: string) {
     return this.http.get(`https://angular-html-7ade1.firebaseio.com/productos/${ id }.json`);
   }

   buscarProducto( termino: string ) {

    if ( this.productos.length === 0) {
      // cargar productos
      this.cargarProuctos().then(() => {
        // esto se va a ejecutar después de tener los productos
        // Aplicamos el filtro
        this.filtrarProductos( termino );
      });
    } else {
      // aplicar el filtro
      this.filtrarProductos( termino );
    }
   }

   private filtrarProductos( termino: string ) {
    this.productosFiltrado = [];
    termino = termino.toLocaleLowerCase();

     this.productos.forEach( prod => {
       const tituloLower = prod.titulo.toLocaleLowerCase();
      if (prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0) {
        this.productosFiltrado.push( prod );
      }
     });
   }
}
