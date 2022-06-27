import { FC, memo, useMemo } from 'react';
import { useRingMenuContext } from '../RingMenuContext';

interface ItemProps {
  level: number;
  angle: number;
  startAngle: number;
}

const Item: FC<ItemProps> = props => {
  const { helper } = useRingMenuContext();
  const { level, angle, startAngle } = props;

  const path = useMemo(() => helper.getSectorPath(level, angle, startAngle), [
    helper,
    level,
    angle,
    startAngle,
  ]);

  return (
    <g>
      <path className="sector" d={path} fill="white" stroke="gray" strokeWidth={1} />
    </g>
  );
};
export default memo(Item);
