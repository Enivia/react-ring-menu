export interface Point {
  x: number;
  y: number;
}

export interface MenuItem {
  key: string | number;
  title: string;
  disabled?: boolean;
}

export interface RingMenuProps {
  items: MenuItem[];
  width?: number;
  hollowRadius?: number;
}
