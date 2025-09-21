import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { PricingTableWrapper } from './pricing-table';
import { Plan } from '@myworkspace/ui-angular';

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
const mockPlans: Plan[] = [
  // --- Monthly plans ---
  {
    name: 'Basic',
    price: 30,
    currency: '$',
    duration: 'mo',
    features: [
      { value: '5', label: 'Email Accounts' },
      { value: '1', label: 'Template Style' },
      { value: '25', label: 'Products Loaded' },
      { value: '1', label: 'Image per Product' },
      { value: 'Unlimited', label: 'Bandwidth' },
    ],
    signupUrl: '#',
    type: 'monthly',
    isVisible: true,
  },
  {
    name: 'Pro',
    price: 60,
    currency: '$',
    duration: 'mo',
    features: [
      { value: '10', label: 'Email Accounts' },
      { value: '3', label: 'Template Styles' },
      { value: '50', label: 'Products Loaded' },
      { value: '3', label: 'Images per Product' },
      { value: 'Unlimited', label: 'Bandwidth' },
      { value: '24/7', label: 'Priority Support' },
    ],
    signupUrl: '#',
    type: 'monthly',
    isVisible: true,
  },
  {
    name: 'Enterprise',
    price: 120,
    currency: '$',
    duration: 'mo',
    features: [
      { value: 'Unlimited', label: 'Email Accounts' },
      { value: '10', label: 'Template Styles' },
      { value: '500', label: 'Products Loaded' },
      { value: '10', label: 'Images per Product' },
      { value: 'Unlimited', label: 'Bandwidth' },
      { value: 'Dedicated Manager', label: 'Support' },
    ],
    signupUrl: '#',
    type: 'monthly',
    isVisible: true,
  },

  // --- Yearly plans ---
  {
    name: 'Basic Yearly',
    price: 300,
    currency: '$',
    duration: 'yr',
    features: [
      { value: '5', label: 'Email Accounts' },
      { value: '1', label: 'Template Style' },
      { value: '25', label: 'Products Loaded' },
      { value: '1', label: 'Image per Product' },
      { value: 'Unlimited', label: 'Bandwidth' },
    ],
    signupUrl: '#',
    type: 'yearly',
    isVisible: false,
  },
  {
    name: 'Pro Yearly',
    price: 600,
    currency: '$',
    duration: 'yr',
    features: [
      { value: '10', label: 'Email Accounts' },
      { value: '3', label: 'Template Styles' },
      { value: '50', label: 'Products Loaded' },
      { value: '3', label: 'Images per Product' },
      { value: 'Unlimited', label: 'Bandwidth' },
      { value: '24/7', label: 'Priority Support' },
    ],
    signupUrl: '#',
    type: 'yearly',
    isVisible: false,
  },
  {
    name: 'Enterprise Yearly',
    price: 1200,
    currency: '$',
    duration: 'yr',
    features: [
      { value: 'Unlimited', label: 'Email Accounts' },
      { value: '10', label: 'Template Styles' },
      { value: '500', label: 'Products Loaded' },
      { value: '10', label: 'Images per Product' },
      { value: 'Unlimited', label: 'Bandwidth' },
      { value: 'Dedicated Manager', label: 'Support' },
    ],
    signupUrl: '#',
    type: 'yearly',
    isVisible: false,
  },
];
export const Default: Story = {
  args: {
    plans: mockPlans,
  },
};
