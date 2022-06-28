import { FC, memo, useMemo, MouseEvent } from 'react';
import { useRingMenuContext } from '../RingMenuContext';

interface ItemProps {
  level: number;
  angle: number;
  origin: number;
  onHover(e: MouseEvent<SVGElement>): void;
}

const Item: FC<ItemProps> = props => {
  const { helper } = useRingMenuContext();
  const { level, angle, origin, onHover } = props;

  const path = useMemo(() => {
    return helper.getSectorPath(level, angle, origin);
  }, [helper, level, angle, origin]);

  return (
    <g onMouseEnter={onHover}>
      <path className="sector" d={path} fill="white" stroke="gray" strokeWidth={1} />
      {/* <text>text inside path</text> */}
    </g>
  );
};
export default memo(Item);
