import { FC, memo, useMemo, useState } from 'react';
import SectorHelper from './SectorHelper';
import { MenuItemsProps, RingMenuProps } from './interface';
import ItemsRenderer from './ItemsRenderer';
import RingMenuContext from './RingMenuContext';
import './index.less';

const ROUND = 2 * Math.PI;

const RingMenu: FC<RingMenuProps> = props => {
  const { items, position, width = 50, hollowRadius = 20 } = props;
  const { x, y } = position;
  const [subItemsProps, setSubItemsProps] = useState<MenuItemsProps>();

  const showSubItems = !!subItemsProps;

  const contextValue = useMemo(() => {
    return { helper: new SectorHelper(width, hollowRadius) };
  }, [width, hollowRadius]);

  const size = useMemo(() => {
    return (width + hollowRadius) * 2 + (showSubItems ? width * 2 : 0);
  }, [width, hollowRadius, showSubItems]);
  const basePoint = -size / 2;
  const viewBox = `${basePoint} ${basePoint} ${size} ${size}`;

  return (
    <RingMenuContext.Provider value={contextValue}>
      <svg
        className="svg-container"
        viewBox={viewBox}
        style={{ width: size, height: size, left: basePoint + x, top: basePoint + y }}
      >
        <g onMouseLeave={() => setSubItemsProps(undefined)}>
          <ItemsRenderer
            items={items}
            level={1}
            origin={0}
            total={ROUND}
            onHover={itemProps =>
              setSubItemsProps(itemProps.items.length > 0 ? itemProps : undefined)
            }
          />
          {showSubItems && <ItemsRenderer {...subItemsProps} />}
        </g>
      </svg>
    </RingMenuContext.Provider>
  );
};
export default memo(RingMenu);
