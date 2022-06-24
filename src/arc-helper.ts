import type { Point } from "./interface";

export default class ArcHelper {
  origin: Point = { x: 80, y: 80 };

  width: number;

  hollowRadius: number;

  constructor(width: number = 40, hollowRadius: number = 20) {
    this.width = width;
    this.hollowRadius = hollowRadius;
  }

  getX = (r: number, angle: number) => {
    return this.origin.x - r * Math.cos(angle);
  };

  getY = (r: number, angle: number) => {
    return this.origin.y + r * Math.sin(angle);
  };

  getTerminalPoints = (r: number, angle: number, index: number): { start: Point; stop: Point } => {
    const startAngle = angle * (index - 1);
    const stopAngle = angle * index;
    return {
      start: { x: this.getX(r, startAngle), y: this.getY(r, startAngle) },
      stop: { x: this.getX(r, stopAngle), y: this.getY(r, stopAngle) },
    };
  };

  getSectorPath = (level: number, angle: number, index: number): string => {
    const innerRadius = this.hollowRadius + this.width * (level - 1);
    const innerPoints = this.getTerminalPoints(innerRadius, angle, index);
    const outerRaduis = this.hollowRadius + this.width * level;
    const outerPoints = this.getTerminalPoints(outerRaduis, angle, index);

    return `M ${outerPoints.start.x} ${outerPoints.start.y} 
      A ${outerRaduis} ${outerRaduis}, 0 0 0, ${outerPoints.stop.x} ${outerPoints.stop.y} 
      L ${innerPoints.stop.x} ${innerPoints.stop.y} 
      A ${innerRadius} ${innerRadius}, 0 0 1, ${innerPoints.start.x} ${innerPoints.start.y} Z`;
  };
}
