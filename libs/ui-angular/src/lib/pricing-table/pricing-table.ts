import { Component, input } from '@angular/core';
import { Plan } from '../models/plan.model';

@Component({
  selector: 'lib-pricing-table',
  imports: [],
  templateUrl: './pricing-table.html',
  styleUrl: './pricing-table.scss',
})
export class PricingTable {
  plans = input<Plan[]>([]);
}
