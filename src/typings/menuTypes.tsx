import { UserType } from './userTypes';

export type NutriInfoValue = 'w' | 'y' | 'n'; // w = with extra charge
export type BrowseType = 0 | 1 | 2; // 0 = Browse | 1 = Dine in | 2 = Takeaway

export type MenuItemType = {
  name: string;
  image?: string;
  description?: string;
  price: number;
  price2?: number;
  nutriInfo?: {
    'gluten free': NutriInfoValue;
    vegetarian: NutriInfoValue;
    takeaway: NutriInfoValue;
  };
  modifiers?: {
    remove?: { name: string }[];
    add?: { name: string; price: number }[];
  };
};

export type MenuType = {
  category: string;
  items: MenuItemType[];
};

export type OrderModifiersType = {
  remove: { name: string; isChecked: boolean }[];
  add: { name: string; price: number; isChecked: boolean }[];
};

export type OrderMenuItemType = {
  name: string;
  price: number;
  price2?: number;
  modifiers?: OrderModifiersType;
  notes?: string;
};

export type OrderType = {
  mode: 1 | 2; // 1 = Dine in | 2 = Takeaway
  statusActive: boolean;
  dateTime: string;
  table?: number;
  pickup?: string;
  items: { num: number; item: OrderMenuItemType }[];
};

export type ReserveType = {
  date: Date;
  numPeople: number;
  service: 'lunch' | 'dinner';
  time: string;
  notes?: string;
  specialRequirements?: string[];
  user: UserType;
};
