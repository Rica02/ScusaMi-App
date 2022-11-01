export type MenuItemType = {
  name: string;
  image?: string;
  description: string;
};

export type MenuType = {
  category: string;
  items: MenuItemType[];
};
