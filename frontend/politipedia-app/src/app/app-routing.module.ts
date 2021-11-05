import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargosPublicosComponent } from './cargos-publicos/cargos-publicos.component';
import { DetalleComponent } from './detalle/detalle.component';
import { HomeComponent } from './home/home.component';
import { MilitanciasComponent } from './militancias/militancias.component';
import { NotasPeriodisticasNewComponent } from './notas-periodisticas-new/notas-periodisticas-new.component';
import { NotasPeriodisticasComponent } from './notas-periodisticas/notas-periodisticas.component';
import { PoliticosListaComponent } from './politicos-lista/politicos-lista.component';

const routes: Routes = [ 
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'politicos-lista', component: PoliticosListaComponent},
  {path: 'politicos-lista/:nombre', component: PoliticosListaComponent},
  {path: 'detalle/:dni', component: DetalleComponent},
  {path: 'militancias/:dni', component: MilitanciasComponent},
  {path: 'notas-periodisticas/:dni', component: NotasPeriodisticasComponent},
  {path: 'cargos-publicos/:dni', component: CargosPublicosComponent},
  {path: 'notas-periodisticas-new/:dni', component: NotasPeriodisticasNewComponent },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
