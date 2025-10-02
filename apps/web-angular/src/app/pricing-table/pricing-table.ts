import { Component, computed, input, signal } from '@angular/core';
import { Plan, PricingTable, ToggleButton } from '@myworkspace/ui-angular';
@Component({
  selector: 'app-pricing-table',
  imports: [ToggleButton, PricingTable],

  templateUrl: './pricing-table.html',
  styleUrl: './pricing-table.scss',
})
export class PricingTableWrapper {
  plans = input<Plan[]>([]);
  selectedType = signal<'monthly' | 'yearly'>('monthly');
  filteredPlans = computed(() =>
    this.plans().filter(plan => plan.type === this.selectedType())
  );

  onPlanTypeChange(type: 'monthly' | 'yearly') {
    this.selectedType.set(type);
  }
}
