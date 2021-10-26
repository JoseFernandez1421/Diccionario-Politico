import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Detalle } from '../shared/model/detalle';
import { PolitipediaService } from '../shared/service/politipedia.service';
import { MatTableDataSource } from '@angular/material/table';
import { Deta } from '../shared/model/deta';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  d : Deta = new Deta();
  dni = '';
  detalle: Detalle = new Detalle();

  detalles: Detalle[] = [];

  detas: Deta[] = [];

  displayedColumns: string[] = ['dato', 'valor'];

  dataSource = new MatTableDataSource<Deta>();

  constructor(private srv: PolitipediaService, 
    private router: Router, 
    private route: ActivatedRoute){

  }


  ngOnInit(){
    
    this.dni = this.route.snapshot.paramMap.get('dni')!;
    this.detalle.dni = this.dni;

    this.getDetalle();

  }


    getDetalle(){

    this.srv.getDetalle(this.detalle).subscribe(res=>{
     //console.log(res);
     this.detalles = res.results as Detalle[];

     //console.log('politics: '+JSON.stringify(this.detalle));

     //console.log('politics: '+this.detalles[0].lugar_domicilio);

     this.d = new Deta();
     this.d.dato = 'DNI';
     this.d.valor = this.detalles[0].dni;
     this.detas[0] = this.d;
     
     this.d = new Deta();
     this.d.dato = 'NOMBRE';
     this.d.valor = this.detalles[0].nombre;
     this.detas[1] = this.d;

     this.d = new Deta();
     this.d.dato = 'FECHA NACIMIENTO';
     this.d.valor = this.detalles[0].fecha_nacimiento;
     this.detas[2] = this.d;

     this.d = new Deta();
     this.d.dato = 'LUGAR NACIMIENTO';
     this.d.valor = this.detalles[0].lugar_nacimiento;
     this.detas[3] = this.d;

     this.d = new Deta();
     this.d.dato = 'LUGAR DOMICILIO';
     this.d.valor = this.detalles[0].lugar_domicilio;
     this.detas[4] = this.d;

     this.d = new Deta();
     this.d.dato = 'BIOGRAFIA';
     this.d.valor = this.detalles[0].biografia;
     this.detas[4] = this.d;

     this.dataSource = new MatTableDataSource<Deta>(this.detas);

   });
 }

 goMilitancias(){
  this.router.navigate(['/militancias', this.dni]);
  console.log("dni: "+this.dni);
 }
 goNotasPeriodisticas(){
  this.router.navigate(['/notas-periodisticas', this.dni]);
  console.log("dni: "+this.dni);
 }
 goCargosPublicos(){
  this.router.navigate(['/cargos-publicos', this.dni]);
  console.log("dni: "+this.dni);
 }
}
