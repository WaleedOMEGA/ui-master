import { Component } from '@angular/core';
import { PricingTable, ToggleButton } from '@myworkspace/ui-angular';
@Component({
  selector: 'app-pricing-table',
  imports: [ToggleButton],

templateUrl: './pricing-table.html',
  styleUrl: './pricing-table.scss',
})
export class PricingTableWrapper {}
