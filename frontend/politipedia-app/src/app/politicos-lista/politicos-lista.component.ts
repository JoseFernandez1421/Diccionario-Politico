import { Component, OnInit } from '@angular/core';


//import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Politico } from '../shared/model/politico';
import { PolitipediaService } from '../shared/service/politipedia.service';

import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-politicos-lista',
  templateUrl: './politicos-lista.component.html',
  styleUrls: ['./politicos-lista.component.css']
})

export class PoliticosListaComponent implements OnInit {
  title = 'politipedia-app';
  nombre = '';
  politico: Politico = new Politico();
  politics: Politico[] = [];


  displayedColumns: string[] = ['dni', 'nombre', 'acciones'];

  dataSource = new MatTableDataSource<Politico>();

  constructor(private srv: PolitipediaService, 
    private router: Router, 
    private route: ActivatedRoute){

  }

  ngOnInit(){
    
    this.nombre = this.route.snapshot.paramMap.get('nombre')!;

console.log("nombre: "+this.nombre);

    if (this.nombre == null)
      this.nombre='';


      console.log("nombre: "+this.nombre);

    this.politico.nombre = this.nombre;

    this.getPoliticos();

  }

  getPoliticos(){

     this.srv.getPoliticos(this.politico).subscribe(res=>{
      //console.log(res);
      this.politics = res.results as Politico[];
      //console.log('politics: '+JSON.stringify(this.politics));

      this.dataSource = new MatTableDataSource<Politico>(this.politics);

    });
  }


  goDetalle(dni: string){
    this.router.navigate(['/detalle', dni]);
    console.log("dni: "+dni);
  }



}