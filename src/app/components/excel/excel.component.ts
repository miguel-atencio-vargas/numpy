import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { OperacionesService } from '../../services/operaciones.service'

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styles: [],
  providers: [OperacionesService]
})
export class ExcelComponent implements OnInit {
  public data: any = {matrix: [], operacion: ''} ;
  public resultado;
  public mensaje = '';
// tslint:disable-next-line: variable-name
  constructor(private _operacionesService: OperacionesService) { }

  ngOnInit() {}

  onSubmit() {
    this._operacionesService.operaciones(this.data).subscribe(
      response => {
        this.mensaje = response.mensaje;
        response = JSON.parse(response.resultado);
        this.resultado = response.data;
      }
    );
  }
  operacion(value) {
    this.data.operacion = value;
  }
  onFileChange(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = (evt.target) as DataTransfer;
    if (target.files.length !== 1) { throw new Error('NO se pueden subir multiples archivos'); }
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});
      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
      /* save data */
      const excelVector = XLSX.utils.sheet_to_json(ws, {header: 1});
      this.data.matrix.push(excelVector);
      /* empaquetamos el vector para enviarlo al backend */
    };
    reader.readAsBinaryString(target.files[0]);
  }
}
