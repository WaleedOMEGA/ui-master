import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'lib-toggle-button',
  imports: [],
  templateUrl: './toggle-button.html',
  styleUrl: './toggle-button.scss',
})
export class ToggleButton {
  @Output() toggleChange = new EventEmitter<'monthly' | 'yearly'>();

  onToggle(value: 'monthly' | 'yearly') {
    this.toggleChange.emit(value);
  }
}
