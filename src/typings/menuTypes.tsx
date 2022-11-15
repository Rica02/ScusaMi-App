export type NutriInfoValue = 'w' | 'y' | 'n';

export type MenuItemType = {
  name: string;
  image?: string;
  description: string;
  price: number;
  price2?: number;
  nutriInfo: {
    'gluten free': NutriInfoValue;
    vegetarian: NutriInfoValue;
    takeaway: NutriInfoValue;
  };
};

export type MenuType = {
  category: string;
  items: MenuItemType[];
};
