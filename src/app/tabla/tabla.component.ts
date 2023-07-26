import { Component, OnInit } from '@angular/core';
import { TablaService } from '../tabla-service.service';
import { format } from 'date-fns';
@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
})
export class TablaComponent implements OnInit {
  data: any[] = [];

  fechaIngresada: string = '';

  constructor(private tablaService: TablaService) { }

  ngOnInit() {

    this.loadData();
    this.tablaService.getTablaData().subscribe((data) => {
      this.data = data;
    });

    // Inicializar la fecha con la fecha actual
    const fechaActual = new Date();
    this.fechaIngresada = this.formatDate(fechaActual.toISOString());
  }
  private formatDate(date: string): string {
    const fechaDate = new Date(date);
    return format(fechaDate, 'dd-MM-yyyy');
  }
  onSubmit() {
    const fechaFormateada = this.formatDate(this.fechaIngresada);
    console.log('Fecha ingresada en formato dd-MM-yyyy:', fechaFormateada);

    // Luego, puedes usar la fecha formateada en la solicitud GET al servicio
    this.tablaService.getTablaData(fechaFormateada).subscribe((data) => {
      this.data = data;
    });
  }
  loadData() {
    // Cargar datos iniciales sin proporcionar la fecha
    this.tablaService.getTablaData('').subscribe((data) => {
      this.data = data;
    });
  }
}
