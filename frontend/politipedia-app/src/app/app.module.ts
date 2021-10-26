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

import { HomeComponent } from './home/home.component';
import { PoliticosListaComponent } from './politicos-lista/politicos-lista.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatInputModule} from '@angular/material/input';

import {MatDividerModule} from '@angular/material/divider';
import { DetalleComponent } from './detalle/detalle.component';
import { MilitanciasComponent } from './militancias/militancias.component';
import { NotasPeriodisticasComponent } from './notas-periodisticas/notas-periodisticas.component';
import { CargosPublicosComponent } from './cargos-publicos/cargos-publicos.component';




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
    CargosPublicosComponent
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
    RouterModule.forRoot([
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'politicos-lista', component: PoliticosListaComponent},
      {path: 'politicos-lista/:nombre', component: PoliticosListaComponent},
      {path: 'detalle/:dni', component: DetalleComponent},
      {path: 'militancias/:dni', component: MilitanciasComponent},
      {path: 'notas-periodisticas/:dni', component: NotasPeriodisticasComponent},
      {path: 'cargos-publicos/:dni', component: CargosPublicosComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }