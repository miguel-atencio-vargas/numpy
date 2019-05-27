import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-visual',
  templateUrl: './input-visual.component.html',
  styles: [],
})
export class InputVisualComponent implements OnInit {
  public cols =  [1];
  public rows =  [1, 1];
  public data;
  public values= '';
  
  public workStatuses = [
    { id: 0, description: 'unknow' },
    { id: 1, description: 'student' },
    { id: 2, description: 'unemployed' },
    { id: 3, description: 'employed' }
  ];
  public contact = { name: '', isVIP: false, gender: '', workStatus: 0 };
  constructor() { }

  ngOnInit() {}
  onKey(event: any) { // without type info
    this.values += event.target.value + ' ';
  }
  changeCols() {
    this.cols.push(1);
  }
  changeRows() {
    this.rows.push(1);
  }
}
