import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TablaService {
  private apiUrl = 'http://localhost:3001/tabla';

  constructor(private http: HttpClient) { }

  getTablaData(fecha?: string): Observable<any[]> {
    // Si se proporciona una fecha, agrega la fecha como parámetro a la URL de la solicitud
    return this.http.get<any[]>(this.apiUrl);
    const url = this.apiUrl + '/' + fecha;
    return this.http.get<any[]>(url);
    // const url = `${this.apiUrl}/${fecha}`;
    // // Agregar datos de autenticación básica en el encabezado de la solicitud
    // const headers = new HttpHeaders({
    //   'Authorization': 'Basic ' + btoa('username:password') // Reemplaza 'username' y 'password' con tus credenciales
    // });

    // return this.http.get<any[]>(url, { headers });
  }
}
