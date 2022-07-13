import { FC, memo, useMemo, useState } from 'react';
import SectorHelper from './SectorHelper';
import { ActiveMenuItem, RingMenuProps } from './interface';
import ItemsRenderer from './ItemsRenderer';
import RingMenuContext from './RingMenuContext';
import './index.less';

const ROUND = 2 * Math.PI;

const RingMenu: FC<RingMenuProps> = props => {
  const { items, position, width = 50, hollowRadius = 20 } = props;
  const { x, y } = position;
  const [activeItems, setActiveItems] = useState<ActiveMenuItem[]>(() => [
    { item: { key: 'ROOT', title: 'ROOT', children: items }, origin: 0, total: ROUND },
  ]);

  const contextValue = useMemo(() => {
    return { helper: new SectorHelper(width, hollowRadius), activeItems };
  }, [width, hollowRadius, activeItems]);

  const size = useMemo(() => {
    return (width + hollowRadius) * 2 + width * 2 * activeItems.length;
  }, [width, hollowRadius, activeItems.length]);
  const basePoint = -size / 2;
  const viewBox = `${basePoint} ${basePoint} ${size} ${size}`;

  const onMenuHover = (activeItem: ActiveMenuItem, level: number) => {
    const items = activeItems.splice(0, level + 1);
    items.push(activeItem);
    setActiveItems(items);
  };

  return (
    <RingMenuContext.Provider value={contextValue}>
      <svg
        className="svg-container"
        viewBox={viewBox}
        style={{ width: size, height: size, left: basePoint + x, top: basePoint + y }}
      >
        <g onMouseLeave={() => setActiveItems(activeItems.splice(0, 1))}>
          {activeItems.map(({ item, origin, total }, level) => {
            if (item.disabled || !item.children) return null;
            return (
              <ItemsRenderer
                items={item.children}
                origin={origin}
                total={total}
                level={level}
                onHover={menu => onMenuHover(menu, level)}
              />
            );
          })}
        </g>
      </svg>
    </RingMenuContext.Provider>
  );
};
export default memo(RingMenu);
