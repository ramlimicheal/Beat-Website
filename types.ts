export interface LicenseFeature {
  text: string;
  included: boolean;
  highlight?: boolean;
}

export interface License {
  id: number;
  name: string;
  price: number | string;
  priceSuffix: string;
  isPopular?: boolean;
  isBestDeal?: boolean;
  features: LicenseFeature[];
  theme: 'light' | 'dark';
}
