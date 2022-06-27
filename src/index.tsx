import { FC, memo, useMemo } from 'react';
import SectorHelper from './SectorHelper';
import { RingMenuProps } from './interface';
import ItemsRenderer from './ItemsRenderer';
import RingMenuContext from './RingMenuContext';
import './index.less';

const ROUND = 2 * Math.PI;

const RingMenu: FC<RingMenuProps> = props => {
  const { items, width = 40, hollowRadius = 20 } = props;

  const contextValue = useMemo(() => ({ helper: new SectorHelper(width, hollowRadius) }), [
    width,
    hollowRadius,
  ]);

  const size = useMemo(() => (width + hollowRadius) * 2, [width, hollowRadius]);
  const viewBox = useMemo(() => {
    const origin = -size / 2;
    return `${origin} ${origin} ${size} ${size}`;
  }, [size]);

  return (
    <RingMenuContext.Provider value={contextValue}>
      <svg viewBox={viewBox} style={{ width: size, height: size, border: '1px solid' }}>
        <ItemsRenderer items={items} level={1} origin={0} total={ROUND} />
      </svg>
    </RingMenuContext.Provider>
  );
};
export default memo(RingMenu);
