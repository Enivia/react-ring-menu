import { FC, memo, useMemo, useRef, useState } from 'react';
import SectorHelper from './SectorHelper';
import { ActiveMenuItem, MenuItem, RingMenuProps } from './interface';
import ItemRenderer from './ItemRenderer';
import './index.less';

const ROUND = 2 * Math.PI;

const RingMenu: FC<RingMenuProps> = props => {
  const { items, position, width = 48, hollowRadius = 20, onClick } = props;
  const x = position?.x ?? 0;
  const y = position?.y ?? 0;

  const [activeItems, setActiveItems] = useState<ActiveMenuItem[]>([]);
  const helper = useRef(new SectorHelper(width, hollowRadius));

  const size = useMemo(() => {
    return (width + hollowRadius) * 2 + width * 2 * activeItems.length;
  }, [width, hollowRadius, activeItems.length]);
  const basePoint = -size / 2;
  const viewBox = `${basePoint} ${basePoint} ${size} ${size}`;

  const onMenuItemHover = (item: MenuItem, level: number, origin: number, total: number) => {
    const items = activeItems.splice(0, level);
    if (!item.disabled) {
      items.push({ item, origin, total });
    }
    setActiveItems(items);
  };

  const renderItems = (items: MenuItem[], level: number, origin: number, total: number) => {
    const angle = total / items.length;
    return items.map((item, i) => {
      const start = origin + angle * i;
      const active = activeItems.some(menu => menu.item.key === item.key);
      const config = helper.current.getSectorRenderConfig(level, angle, start);
      return (
        <ItemRenderer
          key={item.key}
          item={item}
          config={config}
          active={active}
          onHover={() => onMenuItemHover(item, level, start, angle)}
          onClick={e => onClick?.(item, e)}
        />
      );
    });
  };

  return (
    <svg
      className="svg-container"
      viewBox={viewBox}
      style={{ width: size, height: size, left: basePoint + x, top: basePoint + y }}
    >
      <g onMouseLeave={() => setActiveItems([])}>
        {renderItems(items, 0, 0, ROUND)}
        {activeItems.map(({ item, origin, total }, i) => {
          if (!item.children?.length) return null;
          return <g key={i}>{renderItems(item.children, i + 1, origin, total)}</g>;
        })}
      </g>
    </svg>
  );
};
export default memo(RingMenu);
