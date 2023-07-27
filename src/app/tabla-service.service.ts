import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TablaService {
  private apiUrl = 'http://localhost:8085/proyecto-reportes/api/reporte-riesgo';

  constructor(private http: HttpClient) { }


  getTablaData(fecha?: string): Observable<any[]> {
    let url = this.apiUrl;

    if (fecha) {
      url += '/' + fecha;
    }
    console.log(url)

    // Agregar datos de autenticación básica en el encabezado de la solicitud
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('user:541f3fbf-f78f-4987-a7a3-ae999b7bf5a7')
      // Reemplaza 'username' y 'password' con tus credenciales 1e694cf7-61a9-4764-af61-26217a10eda9
    });
    return this.http.get<any[]>(url, { headers });
  }
}
