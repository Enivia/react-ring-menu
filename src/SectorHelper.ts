import { Point, SectorRenderConfig } from './interface';

export default class SectorHelper {
  width: number;

  hollowRadius: number;

  constructor(width: number, hollowRadius: number) {
    this.width = width;
    this.hollowRadius = hollowRadius;
  }

  getX = (r: number, angle: number) => {
    return -r * Math.cos(angle);
  };

  getY = (r: number, angle: number) => {
    return r * Math.sin(angle);
  };

  getRadius = (level: number): number => {
    return this.hollowRadius + this.width * level;
  };

  getCirclePoint = (r: number, angle: number): Point => {
    return { x: this.getX(r, angle), y: this.getY(r, angle) };
  };

  getSectorRenderConfig = (level: number, angle: number, origin: number): SectorRenderConfig => {
    const innerRadius = this.getRadius(level);
    const outerRadius = this.getRadius(level + 1);

    const points: [Point, Point, Point, Point] = [
      this.getCirclePoint(outerRadius, origin),
      this.getCirclePoint(outerRadius, origin + angle),
      this.getCirclePoint(innerRadius, origin + angle),
      this.getCirclePoint(innerRadius, origin),
    ];

    const centerDeg = origin + angle / 2;
    const innerCenter = this.getCirclePoint(innerRadius, centerDeg);
    const outerCenter = this.getCirclePoint(outerRadius, centerDeg);
    const center: Point = {
      x: (innerCenter.x + outerCenter.x) / 2,
      y: (innerCenter.y + outerCenter.y) / 2,
    };
    return { innerRadius, outerRadius, points, center };
  };
}
