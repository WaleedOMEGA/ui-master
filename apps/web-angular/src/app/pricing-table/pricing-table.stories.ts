import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { PricingTableWrapper } from './pricing-table';

export default {
  title: 'UI/Pricing Table',
  component: PricingTableWrapper,
  decorators: [
    moduleMetadata({
      imports: [CommonModule], // add Angular Material or any needed modules
    }),
  ],
} as Meta<PricingTableWrapper>;

type Story = StoryObj<PricingTableWrapper>;

export const Default: Story = {
  args: {
    // later you can bind @Input() props here
  },
};
