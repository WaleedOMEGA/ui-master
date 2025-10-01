import { Component, input } from '@angular/core';
import { Plan, PricingTable, ToggleButton } from '@myworkspace/ui-angular';
@Component({
  selector: 'app-pricing-table',
  imports: [ToggleButton, PricingTable],

  templateUrl: './pricing-table.html',
  styleUrl: './pricing-table.scss',
})
export class PricingTableWrapper {
  plans = input<Plan[]>([]);
}
