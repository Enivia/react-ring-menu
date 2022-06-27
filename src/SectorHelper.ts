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

  getPathPoints = (r: number, angle: number, startAngle: number): { start: Point; stop: Point } => {
    const stopAngle = startAngle + angle;
    return {
      start: { x: this.getX(r, startAngle), y: this.getY(r, startAngle) },
      stop: { x: this.getX(r, stopAngle), y: this.getY(r, stopAngle) },
    };
  };

  getSectorPath = (level: number, angle: number, startAngle: number): string => {
    const innerRadius = this.hollowRadius + this.width * (level - 1);
    const innerPoints = this.getPathPoints(innerRadius, angle, startAngle);
    const outerRaduis = this.hollowRadius + this.width * level;
    const outerPoints = this.getPathPoints(outerRaduis, angle, startAngle);

    return `M ${outerPoints.start.x} ${outerPoints.start.y} 
      A ${outerRaduis} ${outerRaduis}, 0 0 0, ${outerPoints.stop.x} ${outerPoints.stop.y} 
      L ${innerPoints.stop.x} ${innerPoints.stop.y} 
      A ${innerRadius} ${innerRadius}, 0 0 1, ${innerPoints.start.x} ${innerPoints.start.y} Z`;
  };
}
