import { FC, memo, MouseEvent } from 'react';
import cls from 'classnames';
import { MenuItem, SectorRenderConfig } from './interface';

const className = 'menu-item';

interface ItemProps {
  item: MenuItem;
  config: SectorRenderConfig;
  active?: boolean;
  onHover(e: MouseEvent<SVGElement>): void;
  onClick(e: MouseEvent<SVGElement>): void;
}

const ItemRenderer: FC<ItemProps> = props => {
  const { item, config, active, onHover, onClick } = props;
  const { innerRadius, outerRadius, points, center } = config;

  const path = `M ${points[0].x} ${points[0].y} 
  A ${outerRadius} ${outerRadius}, 0 0 0, ${points[1].x} ${points[1].y} 
  L ${points[2].x} ${points[2].y} 
  A ${innerRadius} ${innerRadius}, 0 0 1, ${points[3].x} ${points[3].y} Z`;

  return (
    <g
      className={cls(className, {
        [`${className}-active`]: active,
        [`${className}-disabled`]: item.disabled,
      })}
      onMouseEnter={onHover}
      onClick={onClick}
    >
      <path className={`${className}-sector`} d={path} />
      <text
        className={`${className}-title`}
        x={center.x}
        y={center.y}
        textAnchor="middle"
        alignmentBaseline="middle"
      >
        {item.title}
        <title>{item.title}</title>
      </text>
    </g>
  );
};
export default memo(ItemRenderer);
