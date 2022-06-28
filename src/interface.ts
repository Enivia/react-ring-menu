export interface Point {
  x: number;
  y: number;
}

export interface BaseMenuItem {
  key: string | number;
  title: string;
  disabled?: boolean;
}

export interface MenuItem extends BaseMenuItem {
  children?: BaseMenuItem[];
}

export interface RingMenuProps {
  items: MenuItem[];
  position: Point;
  width?: number;
  hollowRadius?: number;
}

export interface MenuItemsProps {
  items: MenuItem[];
  level: number;
  /** origin angle */
  origin: number;
  /** total angle */
  total: number;
}
