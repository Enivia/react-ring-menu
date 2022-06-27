import { FC, memo, useMemo } from 'react';
import { ItemsRendererProps } from '../interface';
import Item from './Item';

const ItemsRenderer: FC<ItemsRendererProps> = props => {
  const { items, level, origin, total } = props;

  const len = items.length;
  const angle = useMemo(() => total / len, [total, len]);

  return (
    <>
      {items.map((item, i) => (
        <Item key={item.key} level={level} angle={angle} startAngle={origin + angle * i} />
      ))}
    </>
  );
};
export default memo(ItemsRenderer);
