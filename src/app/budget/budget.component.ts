import { Component, OnInit } from '@angular/core';
import { Subbudget } from '../subbudget';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  totalLabel = 'Total Budget';
  totalBudget = 400;

  subbudget: Subbudget = {
    name: 'Groceries',
    amount: 200
  }
  
  constructor() { }

  ngOnInit() {}
}
