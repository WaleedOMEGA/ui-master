import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PricingTableWrapper } from "./pricing-table/pricing-table";

@Component({
  imports: [RouterModule, PricingTableWrapper],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'web-angular';
}
