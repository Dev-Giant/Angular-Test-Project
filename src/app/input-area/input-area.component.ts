import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { inputFruit } from '../interfaces';

@Component({
  selector: 'app-input-area',
  templateUrl: './input-area.component.html',
  styleUrls: ['./input-area.component.css']
})

export class InputAreaComponent implements OnInit {
  
  @Input() fruitsEntries: inputFruit[] = [];
  @Output() added = new EventEmitter<number>();
  customerName: string = "";
  fruitsListTitle: string = "";
  constructor() { }

  ngOnInit(): void {
    this.customerName = "Customer Name:";
    this.fruitsListTitle = "Fruits in Stock";
  }

  add(index: number)
  {
    this.added.emit(index);
  }

}
