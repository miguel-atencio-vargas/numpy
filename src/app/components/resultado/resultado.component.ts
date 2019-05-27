import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  @Input() public matriz_resultado;
  @Input() public mensaje;
  constructor() { }

  ngOnInit() {
  }

}
