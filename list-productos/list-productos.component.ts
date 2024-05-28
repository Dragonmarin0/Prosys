import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../interface/producto';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-list-productos',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './list-productos.component.html',
  styleUrl: './list-productos.component.css'
})
export class ListProductosComponent implements OnInit{
listProductos:Producto[]=[{
  referencia: 12321,
  marca: 'ntn',
  cantidad: 12,
  fechaCreacion: new Date,
  precio: 20000,
  rederencia: undefined
},
{
  referencia: 32666,
  marca: 'skf',
  cantidad: 0,
  fechaCreacion: new Date,
  precio: 0,
  rederencia: undefined
}]
    constructor(){}
    ngOnInit(): void {
        
    }
}
