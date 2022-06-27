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
  width?: number;
  hollowRadius?: number;
}

export interface ItemsRendererProps {
  items: MenuItem[];
  level: number;
  /** origin angle */
  origin: number;
  /** total angle */
  total: number;
}
