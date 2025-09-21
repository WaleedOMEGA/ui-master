export interface Plan {
  name: string; // e.g., "Basic"
  price: number; // e.g., 30
  currency: string; // e.g., "$"
  duration: string; // e.g., "mo"
  features: {
    value: string; // e.g., "5"
    label: string; // e.g., "Email Accounts"
  }[];
  signupUrl?: string; // e.g., "#"
  type?: 'monthly' | 'yearly'; // for data-type attribute
  isVisible?: boolean; // matches "is-visible" class
}
