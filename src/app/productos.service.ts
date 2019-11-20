import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  url='http://localhost:3000/productos/'; 
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get(`${this.url}listar`);
  }
  nuevo(producto) {
    return this.http.post(`${this.url}`, producto); 
     
  }
  
  eliminar(codigo) {
    return this.http.delete(`${this.url}${codigo}`);
  }
  mostrar(codigo) {
    return this.http.get(`${this.url}mostrar/${codigo}`);
  }
  actualizar(producto) {
    return this.http.put(`${this.url}`, producto);    
  }
}

// export class ProductosService {
//   constructor(protected http: HttpClient) { }

//   getProductos() {
//     // tslint:disable-next-line:variable-name
//     const url_api = 'http://localhost:3000/productos/listar';
//     return this.http.get(url_api);
//   }
// }

console.log("asdas")