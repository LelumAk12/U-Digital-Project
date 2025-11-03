import type { ComponentType, SVGProps } from 'react';

export interface Package {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  featured?: boolean;
}
