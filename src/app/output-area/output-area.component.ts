import { Component, Input, OnInit } from '@angular/core';
import { outputFruit } from '../interfaces';

@Component({
  selector: 'app-output-area',
  templateUrl: './output-area.component.html',
  styleUrls: ['./output-area.component.css']
})
export class OutputAreaComponent implements OnInit {
  @Input() fruitsOutput: outputFruit[] = [];
  title: string = "";
  constructor() { }

  ngOnInit(): void {
    this.title = "Shopping Basket for: "
  }

}
