import { UserType } from './userTypes';

export type NutriInfoValue = 'w' | 'y' | 'n'; // w = with extra charge
export type BrowseType = 0 | 1 | 2; // 0 = Browse | 1 = Dine in | 2 = Takeaway

export type MenuItemType = {
  name: string;
  image?: string;
  description?: string;
  price?: number;
  price2?: number;
  nutriInfo?: {
    'gluten free': NutriInfoValue;
    vegetarian: NutriInfoValue;
    takeaway: NutriInfoValue;
  };
  modifiers?: {
    remove?: string[];
    add?: { addOnName: string; addOnPrice: number }[];
  };
};

export type MenuType = {
  category: string;
  items: MenuItemType[];
};

export type OrderType = {
  mode: 1 | 2; // 1 = Dine in | 2 = Takeaway
  statusActive: boolean;
  dateTime: string;
  table?: number;
  pickup?: string;
  items: { num: number; item: MenuItemType }[];
};

export type ReserveType = {
  date: string;
  numPeople: number;
  service: 'lunch' | 'dinner';
  time: string;
  notes?: string;
  specialRequirements?: string[];
  user: UserType;
};
