import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { OperacionesService } from '../../services/operaciones.service'


@Component({
  selector: 'app-unimatriz',
  templateUrl: './unimatriz.component.html',
  styleUrls: ['./unimatriz.component.css'],
  providers: [OperacionesService]
})
export class UnimatrizComponent implements OnInit {
  public data: any = {matrix: [], operacion: ''} ;
  public resultado;
  public status: string;
  public mensaje = '';

  constructor(private _operacionesService: OperacionesService) { }

  ngOnInit() {
  }
  onSubmit() {
    this._operacionesService.unimatriz(this.data).subscribe(
      response => {
        this.mensaje = response.mensaje;
        response = JSON.parse(response.resultado);
        this.resultado = response.data;
        console.log(response)
      }
    );
  }
  onFileChange(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = (evt.target) as DataTransfer;
    if (target.files.length !== 1) { throw new Error('Cannot use multiple files'); }
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
  operacion(value) {
    this.data.operacion = value;
  }

}
