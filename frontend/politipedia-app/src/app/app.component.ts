import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Politico } from './shared/model/politico';
import { PolitipediaService } from './shared/service/politipedia.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'politipedia-app';
  politico: Politico = new Politico();
  politics: Politico[] = [];


  displayedColumns: string[] = ['dni', 'nombre'];

  dataSource = new MatTableDataSource<Politico>();

  constructor(private srv: PolitipediaService){

  }

  getPoliticos(){

     this.srv.getPoliticos(this.politico).subscribe(res=>{
      //console.log(res);
      this.politics = res.results as Politico[];
      //console.log('politics: '+JSON.stringify(this.politics));

      this.dataSource = new MatTableDataSource<Politico>(this.politics);

    });
  }

}