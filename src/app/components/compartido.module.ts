import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RecomendacionesComponent } from './recomendaciones/recomendaciones.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { InfoComponent } from './info/info.component';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,RecomendacionesComponent,CategoriasComponent,PedidosComponent,InfoComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
   
  ],exports:[
   HeaderComponent,
   FooterComponent,
   RecomendacionesComponent,
   CategoriasComponent,
   PedidosComponent,
   InfoComponent,
  ]
  
})
export class CompartidoModule { }
