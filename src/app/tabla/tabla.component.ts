import { Component, OnInit } from '@angular/core';
import { TablaService } from '../tabla-service.service';
import { format } from 'date-fns';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
})
export class TablaComponent implements OnInit {
  data: any[] = [];

  fechaIngresada: string = '';

  constructor(private tablaService: TablaService) { }
  exportToExcel() {
    // Convertir los datos en formato de hoja de cálculo de Excel
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.data);

    // Crear un libro de Excel y añadir la hoja de cálculo
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Datos');

    // Generar el archivo Excel
    const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });

    // Guardar el archivo usando file-saver
    const fechaFormateada = this.formatDate(new Date().toISOString());
    const excelFileName = `datos_${fechaFormateada}.xlsx`;
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(blob, excelFileName);
  }

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
