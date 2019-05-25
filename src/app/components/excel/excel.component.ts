import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import * as XLSX from 'xlsx';
import { OperacionesService } from '../../services/operaciones.service'

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styles: [],
  providers: [OperacionesService]
})
export class ExcelComponent implements OnInit {
  public data = [] ;
  // @Output() public resultado = new EventEmitter<number>();
  public resultado;
  public status: string;
// tslint:disable-next-line: variable-name
  constructor(private _operacionesService: OperacionesService) { }

  ngOnInit() {
    console.log('Componente de login cargado');
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
      this.data.push(XLSX.utils.sheet_to_json(ws, {header: 1})) ;
    };
    reader.readAsBinaryString(target.files[0]);
  }



  onSubmit() {
    this._operacionesService.sumar(this.data).subscribe(
      response => {
        this.resultado = JSON.parse(response.resultado).data;
      },
      error => {
        const errorMessage: any = error;
        console.log(errorMessage);
        if (errorMessage != null) {
           this.status = 'error';
       }
      }
    );
  }
}
