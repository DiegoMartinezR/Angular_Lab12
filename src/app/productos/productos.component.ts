import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

 
  uploadedFiles: Array<File>;
 

  lista = null;
  prod = {
    "codigo": null,
    "descripcion": null,
    "precio": null,
    "imagen": null
  }

  constructor(private productosServicio: ProductosService) { }
  

  ngOnInit() {
    this.recuperarTodos();
  }

  onfileselected(event){
    this.uploadedFiles = event.target.files;
    console.log(this.uploadedFiles);
  }
  // onfileselected(event){
  //   this.prod.imagen = <File>event.target.files[0];
  // }

  recuperarTodos() {
    this.productosServicio.listar().subscribe(result => {
      this.lista = result;
    });
  }

  nuevo() {
    const fd = new FormData();
    fd.append('descripcion', this.prod.descripcion);
    fd.append('precio', this.prod.precio);
    fd.append('imagen', this.uploadedFiles[0], this.uploadedFiles[0].name);
    console.log(fd);
    console.log(this.prod)
    // fd.append('image',this.prod.imagen,this.prod.imagen.name);
    this.productosServicio.nuevo(fd).subscribe(result => {
      this.limpiar();
      this.recuperarTodos();
    });
  }

  eliminar(codigo) {
    try {
      if (!confirm("Esta seguro que desea eliminar este registro?"))
        return;
      this.recuperarTodos();
      this.productosServicio.eliminar(codigo).subscribe(result => {
        this.recuperarTodos();
        console.log(result);
      });
      this.recuperarTodos();
    } catch (e) {
    }
  }

  actualizar() {

    const fd = new FormData();
    fd.append('codigo', this.prod.codigo);
    fd.append('imagen', this.uploadedFiles[0], this.uploadedFiles[0].name);
    fd.append('descripcion', this.prod.descripcion);
    fd.append('precio', this.prod.precio);

    this.productosServicio.actualizar(fd).subscribe(result => {
      console.log(result)
      this.limpiar();
      this.recuperarTodos(); 
    });
  }

  mostrar(codigo) {
    console.log("This is the code: " + codigo);
    this.productosServicio.mostrar(codigo).subscribe(resultado => {
      var cod = Object.entries(resultado)[0][1]
      
      this.prod = cod
     console.log(this.prod);
    //  console.log(des);
      // // this.prod.id = codigo
      // this.prod.nombre = 
      // console.log(this.prod.id)
      // this.prod.nombre = des;
      // this.prod.precio = pre;
      
    });
  }

  hayRegistros() {
    try {
      // console.log(this.lista);
      if (this.lista.length > 0) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
    }
  }

  limpiar() {
    this.prod = {
      codigo: null,
      descripcion: null,
      precio: null,
      imagen: null
    };
  }

}