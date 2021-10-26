import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { NotaPeriodistica } from '../shared/model/nota-periodistica';
import { Politico } from '../shared/model/politico';
import { PolitipediaService } from '../shared/service/politipedia.service';

@Component({
  selector: 'app-notas-periodisticas',
  templateUrl: './notas-periodisticas.component.html',
  styleUrls: ['./notas-periodisticas.component.css']
})
export class NotasPeriodisticasComponent implements OnInit {

  dni = '';

  politico: Politico = new Politico();

  notasPeriodisticas: NotaPeriodistica[] = [];


  displayedColumns: string[] = ['dni', 'resumen','link'];

  dataSource = new MatTableDataSource<NotaPeriodistica>();
  
  constructor(private srv: PolitipediaService, 
    private router: Router, 
    private route: ActivatedRoute){

  }

  ngOnInit(): void {
     
    this.dni = this.route.snapshot.paramMap.get('dni')!;
    this.politico.dni = this.dni;

    this.getNotasPeriodisticas();   
  }


  
  getNotasPeriodisticas(){

    this.srv.getNotasPeriodisticas(this.politico).subscribe(res=>{
     //console.log(res);
     this.notasPeriodisticas = res.results as NotaPeriodistica[];
     //console.log('politics: '+JSON.stringify(this.politics));

     this.dataSource = new MatTableDataSource<NotaPeriodistica>(this.notasPeriodisticas);

   });
 }


}
