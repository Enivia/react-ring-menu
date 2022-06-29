import { Point } from './interface';

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

  getSectorPoints = (r: number, angle: number, origin: number): { start: Point; stop: Point } => {
    return { start: this.getCirclePoint(r, origin), stop: this.getCirclePoint(r, origin + angle) };
  };

  getSectorPath = (level: number, angle: number, origin: number): string => {
    const innerRadius = this.getRadius(level - 1);
    const innerPoints = this.getSectorPoints(innerRadius, angle, origin);
    const outerRaduis = this.getRadius(level);
    const outerPoints = this.getSectorPoints(outerRaduis, angle, origin);

    return `M ${outerPoints.start.x} ${outerPoints.start.y} 
      A ${outerRaduis} ${outerRaduis}, 0 0 0, ${outerPoints.stop.x} ${outerPoints.stop.y} 
      L ${innerPoints.stop.x} ${innerPoints.stop.y} 
      A ${innerRadius} ${innerRadius}, 0 0 1, ${innerPoints.start.x} ${innerPoints.start.y} Z`;
  };

  getSectorCenter = (level: number, angle: number, origin: number): Point => {
    const deg = origin + angle / 2;
    const innerRadius = this.getRadius(level - 1);
    const innerCenter = this.getCirclePoint(innerRadius, deg);
    const outerRaduis = this.getRadius(level);
    const outerCenter = this.getCirclePoint(outerRaduis, deg);
    return { x: (innerCenter.x + outerCenter.x) / 2, y: (innerCenter.y + outerCenter.y) / 2 };
  };
}
