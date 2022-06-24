import { FC, memo, useMemo, useState } from 'react';
import ArcHelper from './arc-helper';
import type { MenuItem, RingMenuProps } from './interface';
import './index.less';


const RingMenu: FC<RingMenuProps> = (props) => {
  const { items, width, hollowRadius } = props;
  const [arcHelper] = useState(() => new ArcHelper(width, hollowRadius));

  const len = items.length;
  const angle = useMemo(() => (2 * Math.PI) / len, [len]);

  const renderMenuItem = (item: MenuItem, index: number) => {
    const path = arcHelper.getSectorPath(1, angle, index);
    return (
      <g key={item.key}>
        <path d={path} fill="white" stroke="gray" strokeWidth={1} />
      </g>
    );
  };

  return (
    <svg style={{ border: '1px solid' }}>{items.map((item, i) => renderMenuItem(item, i + 1))}</svg>
  );
};
export default memo(RingMenu);
