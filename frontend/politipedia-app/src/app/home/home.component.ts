import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Politico } from '../shared/model/politico';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  value = 'Clear me';
  
  politico: Politico = new Politico();

  constructor(private router: Router, private route: ActivatedRoute) { 
    

  }

  ngOnInit(): void {
  }


  goPoliticosLista(){
    this.router.navigate(['/politicos-lista', this.politico.nombre]);
  }

  hasRoute(route: string){
    return this.router.url.includes(route);
  }

}
