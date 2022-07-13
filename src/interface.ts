export interface Point {
  x: number;
  y: number;
}

export interface MenuItem {
  key: string | number;
  title: string;
  disabled?: boolean;
  children?: MenuItem[];
}

export interface RingMenuProps {
  items: MenuItem[];
  position: Point;
  width?: number;
  hollowRadius?: number;
}

export interface ItemsRenderProps {
  /** origin angle */
  origin: number;
  /** total angle */
  total: number;
}

export interface ActiveMenuItem extends ItemsRenderProps {
  item: MenuItem;
}
