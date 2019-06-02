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
  public rows = 0; cols = 0;
  public a = 0; b = 0;
  public mu: number; sigma: number;
  public types = ['Integer', 'float', 'normal', 'normal_Scipy', 'Multivariate_normal'];
  public type;

  constructor(private _operacionesService: OperacionesService) { }

  ngOnInit() {
  }
  onExport(json, name) {
    /* generate worksheet */
    console.log(name);
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(json.data);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws);

    /* save to file */
    XLSX.writeFile(wb, name);
  }
  onSubmit() {
    const data = {m: this.rows, n: this.cols, a: this.a, b: this.b, type: this.type, mu: this.mu, sigma: this.sigma};
    this._operacionesService.random(data).subscribe(
      response => {
        console.log(response);
        const name = response.name + '.xlsx';
        response = JSON.parse(response.data);
        this.onExport(response, name);
      }
    );
  }

}
