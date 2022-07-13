import { FC, memo, useMemo, MouseEvent } from 'react';
import cls from 'classnames';
import { MenuItem } from '../interface';
import { useRingMenuContext } from '../RingMenuContext';

const className = 'menu-item';

interface ItemProps {
  item: MenuItem;
  level: number;
  angle: number;
  origin: number;
  onHover(e: MouseEvent<SVGElement>): void;
}

const Item: FC<ItemProps> = props => {
  const { helper, activeItems } = useRingMenuContext();
  const { item, level, angle, origin, onHover } = props;

  const path = useMemo(() => {
    return helper.getSectorPath(level, angle, origin);
  }, [helper, level, angle, origin]);
  const { x, y } = useMemo(() => {
    return helper.getSectorCenter(level, angle, origin);
  }, [helper, level, angle, origin]);
  const hovered = useMemo(() => {
    return activeItems.find(({ item: menuItem }) => menuItem.key === item.key);
  }, [item, activeItems]);

  return (
    <g
      className={cls(className, {
        [`${className}-hover`]: hovered,
        [`${className}-disabled`]: item.disabled,
      })}
      onMouseEnter={onHover}
    >
      <path className={`${className}-sector`} d={path} />
      <text
        className={`${className}-title`}
        x={x}
        y={y}
        textAnchor="middle"
        alignmentBaseline="middle"
      >
        {item.title}
      </text>
    </g>
  );
};
export default memo(Item);
