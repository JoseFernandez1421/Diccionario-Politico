import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotaPeriodistica } from '../shared/model/nota-periodistica';
import { Politico } from '../shared/model/politico';
import { PolitipediaService } from '../shared/service/politipedia.service';

@Component({
  selector: 'app-notas-periodisticas-new',
  templateUrl: './notas-periodisticas-new.component.html',
  styleUrls: ['./notas-periodisticas-new.component.css']
})
export class NotasPeriodisticasNewComponent implements OnInit {

  dni = '';

  notaPeriodistica: NotaPeriodistica = new NotaPeriodistica();


  constructor(private srv: PolitipediaService, 
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dni = this.route.snapshot.paramMap.get('dni')!;
    this.notaPeriodistica.dni = this.dni;
  }


  goGuardar(){
   
    this.srv.newNotasPeriodisticas(this.notaPeriodistica).subscribe(res=>{
      //console.log(res);
      //this.notasPeriodisticas = res.results as NotaPeriodistica[];
      //console.log('politics: '+JSON.stringify(this.politics));
 
     // this.dataSource = new MatTableDataSource<NotaPeriodistica>(this.notasPeriodisticas);
     this.router.navigate(['/notas-periodisticas',this.dni]);
 
    });
  }



}
