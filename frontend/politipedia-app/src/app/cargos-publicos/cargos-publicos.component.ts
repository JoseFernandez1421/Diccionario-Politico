import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { CargoPublico } from '../shared/model/cargo-publico';
import { Politico } from '../shared/model/politico';
import { PolitipediaService } from '../shared/service/politipedia.service';

@Component({
  selector: 'app-cargos-publicos',
  templateUrl: './cargos-publicos.component.html',
  styleUrls: ['./cargos-publicos.component.css']
})
export class CargosPublicosComponent implements OnInit {

  dni = '';

  politico: Politico = new Politico();

  cargosPublicos: CargoPublico[] = [];


  displayedColumns: string[] = ['dni', 'institucion','cargo','fecha_inicio', 'fecha_fin','razon_cese'];

  dataSource = new MatTableDataSource<CargoPublico>();
  
  constructor(private srv: PolitipediaService, 
    private router: Router, 
    private route: ActivatedRoute){

  }

  ngOnInit(): void {
     
    this.dni = this.route.snapshot.paramMap.get('dni')!;
    this.politico.dni = this.dni;

    this.getCargosPublicos();   

    console.log("dno en cargos: "+this.dni);
  }


  
  getCargosPublicos(){

    this.srv.getCargosPublicos(this.politico).subscribe(res=>{
     console.log(res);
     this.cargosPublicos = res.results as CargoPublico[];
     //console.log('politics: '+JSON.stringify(this.politics));

     this.dataSource = new MatTableDataSource<CargoPublico>(this.cargosPublicos);

   });
 }


}
