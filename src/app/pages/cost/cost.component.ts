import { Component, OnInit } from '@angular/core';
import { costs, Procedure } from './service-cost';

@Component({
  selector: 'app-cost',
  templateUrl: './cost.component.html',
  styleUrls: ['./cost.component.scss'],
})
export class CostComponent implements OnInit {
  costs: Procedure[] = costs;

  constructor() {}

  ngOnInit(): void {}
}
