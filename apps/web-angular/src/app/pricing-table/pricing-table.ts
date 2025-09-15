import { Component } from '@angular/core';
import { PricingTable } from '@myworkspace/ui-angular';
@Component({
  selector: 'app-pricing-table',
  imports: [PricingTable],

templateUrl: './pricing-table.html',
  styleUrl: './pricing-table.scss',
})
export class PricingTableWrapper {}
