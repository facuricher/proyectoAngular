import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/service/productos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  producto:any
  description:any
  isLoading:boolean = true
  isError:boolean = false
  constructor(
    private activatedRoute:ActivatedRoute,
    private productosService: ProductosService
  ) {
    const id = this.activatedRoute.snapshot.paramMap.get("id")
    console.log("id", id)
    this.productosService.getById(id)
      .then(data=>{
        this.producto=data
        this.isError=false
      })
      .catch(error=>{
        console.log(error)
        this.isError=true
      })
      .finally(()=>{
        this.isLoading=false
      })
      // llamado para capturar la descripcion del producto
      this.productosService.getDescription(id)
      .then(data=>{
        this.description=data
      })
      .catch(error=>{
        console.log(error)
      })
  }

  ngOnInit(): void {
  }

}