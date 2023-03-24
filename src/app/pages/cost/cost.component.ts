import { Component } from '@angular/core';
import { costs, Procedure } from './service-cost';

@Component({
  selector: 'app-cost',
  templateUrl: './cost.component.html',
  styleUrls: ['./cost.component.scss'],
})
export class CostComponent {
  costs: Procedure[] = costs;

  trackByName(index: number, el: any) {
    return el.Procedure;
  }
}
