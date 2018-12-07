import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductoCompletoInterface } from 'src/app/interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  productoDesc: ProductoCompletoInterface;
  id: string;

  constructor( private route: ActivatedRoute,
                public producto: ProductosService ) { }

  ngOnInit() {
    this.route.params
    .subscribe( parametros => {
      // console.log(parametros['id']);
      this.producto.getProducto(parametros['id'])
      .subscribe( (p: ProductoCompletoInterface) => {
        this.id = parametros['id'];
        this.productoDesc = p;
      });
    });
  }

}
