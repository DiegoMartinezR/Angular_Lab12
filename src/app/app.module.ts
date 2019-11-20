import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import {RouterModule, Routes} from '@angular/router';
import { ProductosDetailComponent } from './productos-detail/productos-detail.component';
import {ProductosService} from './productos.service';
import { FormsModule } from '@angular/forms';

// const appRoutes: Routes = [
//   {path: 'productos', component: ProductosComponent},
//   {path: 'detalle-producto/:id', component: ProductosDetailComponent},
//   {path: '', redirectTo: '/productos', pathMatch: 'full'}
// ];
@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ProductosDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    // RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
