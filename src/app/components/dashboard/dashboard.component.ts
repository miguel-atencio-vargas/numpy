import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})


export class DashboardComponent implements OnInit {
  public a = ['Suma de Matrices', 'Resta de Matrices', 'Multiplicacion vectorial de Matrices', 'Multiplicacion escalar de Matrices'];
  public b = ['Determinante', 'Rango', 'Norma', 'Traspuesta', 'Diagonal', 'Inversa', 'Triangular Inferior', 'Triangular Superior'];
  public c = ['Numeros aleatorios enteros', 'Numeros aleatorios con punto decimal', 'Numeros aleatorios según una distribucion de probabilidad'];
  constructor() { }

  ngOnInit() {
  }

}
