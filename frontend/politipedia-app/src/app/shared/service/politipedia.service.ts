import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PolitipediaService {

  constructor(private http: HttpClient) {

  }

  public getPoliticos(body: any) {
    return this.http.post<any>(this.createRoute('api/politicos'),body, this.generateHeaders());
  }

  public getDetalle(body: any) {
    return this.http.post<any>(this.createRoute('api/politico'),body, this.generateHeaders());
  }

  public getMilitancias(body: any) {
    return this.http.post<any>(this.createRoute('api/militancias'),body, this.generateHeaders());
  }

  public getNotasPeriodisticas(body: any) {
    return this.http.post<any>(this.createRoute('api/notas_periodisticas'),body, this.generateHeaders());
  }

  public getCargosPublicos(body: any) {
    return this.http.post<any>(this.createRoute('api/cargos_publicos'),body, this.generateHeaders());
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