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

export interface ActiveMenuItem {
  item: MenuItem;
  /** origin angle */
  origin: number;
  /** total angle */
  total: number;
}

export interface SectorRenderConfig {
  innerRadius: number;
  outerRadius: number;
  points: [Point, Point, Point, Point];
  center: Point;
}
