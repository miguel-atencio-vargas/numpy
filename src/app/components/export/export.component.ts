import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { OperacionesService } from '../../services/operaciones.service'
@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styles: [],
  providers: [OperacionesService]
})
export class ExportComponent implements OnInit {
  public rows ;
  public cols ;

  constructor(private _operacionesService: OperacionesService) { }

  ngOnInit() {
  }
  onExport(json) {
    /* generate worksheet */
    console.log(json)
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(json);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, 'SheetJS.xlsx');
  }
  onSubmit() {
    const data = {m: this.rows, n: this.cols};
    this._operacionesService.random(data).subscribe(
      response => {
        response = JSON.parse(response.data).data;
        this.onExport(response);
      }
    );
  }

}
