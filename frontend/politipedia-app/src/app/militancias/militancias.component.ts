import { Component, OnInit } from '@angular/core';
import { Politico } from '../shared/model/politico';
import { Militancia } from '../shared/model/militancia';
import { PolitipediaService } from '../shared/service/politipedia.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-militancias',
  templateUrl: './militancias.component.html',
  styleUrls: ['./militancias.component.css']
})
export class MilitanciasComponent implements OnInit {

  dni = '';

  politico: Politico = new Politico();

  militancias: Militancia[] = [];


  displayedColumns: string[] = ['dni', 'partido','cargo','fecha_inicio', 'fecha_fin'];

  dataSource = new MatTableDataSource<Militancia>();
  
  constructor(private srv: PolitipediaService, 
    private router: Router, 
    private route: ActivatedRoute){

  }

  ngOnInit(): void {
     
    this.dni = this.route.snapshot.paramMap.get('dni')!;
    this.politico.dni = this.dni;

    this.getMilitancias();   
  }


  
  getMilitancias(){

    this.srv.getMilitancias(this.politico).subscribe(res=>{
     //console.log(res);
     this.militancias = res.results as Militancia[];
     //console.log('politics: '+JSON.stringify(this.politics));

     this.dataSource = new MatTableDataSource<Militancia>(this.militancias);

   });
 }


}
