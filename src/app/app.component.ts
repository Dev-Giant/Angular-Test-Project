import { Component } from '@angular/core';
import { inputFruit, outputFruit} from './interfaces';
import * as fruits from '../mock/input.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-project';
  inputFruits: inputFruit[] =[];
  outputFruits: outputFruit[] = [];

  ngOnInit(): void {
    const realFruits = JSON.parse(JSON.stringify(fruits));
    for(let i = 0; i < realFruits.length; i++)
    {
      this.inputFruits.push({name: realFruits[i].name, price: realFruits[i].price});
      this.outputFruits.push({name: realFruits[i].name, unitPrice: realFruits[i].price, qty:0, totalPrice: 0})
    }
  }

  OnAdded(index: number) {
    this.outputFruits[index].qty++;
    this.outputFruits[index].totalPrice = Math.round(this.outputFruits[index].unitPrice * this.outputFruits[index].qty * 100) / 100;   
  }
}