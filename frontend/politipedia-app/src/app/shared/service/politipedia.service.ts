import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PolitipediaService {

  constructor(private http: HttpClient) {

  }

  public getPoliticos(nombre: string) {
    return this.http.get<any>(this.createRoute(`api/politicos/${nombre}`), this.generateHeaders());
  }

  public getDetalle(dni: string) {
    return this.http.get<any>(this.createRoute(`api/politico/${dni}`), this.generateHeaders());
  }

  public getMilitancias(dni: string) {
    return this.http.get<any>(this.createRoute(`api/militancias/${dni}`), this.generateHeaders());
  }

  public getNotasPeriodisticas(dni: string) {
    return this.http.get<any>(this.createRoute(`api/notas_periodisticas/${dni}`), this.generateHeaders());
  }

  public getCargosPublicos(dni: string) {
    return this.http.get<any>(this.createRoute(`api/cargos_publicos/${dni}`), this.generateHeaders());
  }


  public newNotasPeriodisticas(body: any) {
    console.log("link: "+body);
    return this.http.post<any>(this.createRoute('api/notas_periodisticas/new'),body, this.generateHeaders());
  }

  public deleteNotasPeriodisticas(codigo_nota: string, dni: string) {
    console.log("dni: "+dni);
    console.log("codigo_nota: "+codigo_nota);
    //return this.http.delete<any>(this.createRoute(`api/notas_periodisticas/delete/${codigo_nota}/${dni}`), this.generateHeaders());


    return this.http.delete(this.createRoute(`api/notas_periodisticas/delete/${codigo_nota}/${dni}`)) 
    .subscribe((data)=>{ 
      console.log(data); //data will actually be an Object sent from Express
    })


  }





  
  private createRoute = (route: string) => {
    return `${environment.urlApi}/${route}`;
  }



  private generateHeaders = () => {
    return {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
  }

}