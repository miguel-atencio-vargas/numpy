import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styles: []
})
export class ResultadoComponent implements OnInit {
  @Input() public matriz_resultado;
  constructor() { }

  ngOnInit() {
  }

}
