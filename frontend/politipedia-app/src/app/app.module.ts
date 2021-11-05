import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';

import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';


import {MatInputModule} from '@angular/material/input';

import {MatDividerModule} from '@angular/material/divider';
import { AppRoutingModule } from './app-routing.module';

import { DetalleComponent } from './detalle/detalle.component';
import { MilitanciasComponent } from './militancias/militancias.component';
import { NotasPeriodisticasComponent } from './notas-periodisticas/notas-periodisticas.component';
import { CargosPublicosComponent } from './cargos-publicos/cargos-publicos.component';
import { HomeComponent } from './home/home.component';
import { PoliticosListaComponent } from './politicos-lista/politicos-lista.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotasPeriodisticasNewComponent } from './notas-periodisticas-new/notas-periodisticas-new.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PoliticosListaComponent,
    HeaderComponent,
    FooterComponent,
    DetalleComponent,
    MilitanciasComponent,
    NotasPeriodisticasComponent,
    CargosPublicosComponent,
    NotasPeriodisticasNewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatDividerModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }