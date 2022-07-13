import { FC, memo } from 'react';
import { ActiveMenuItem, ItemsRenderProps, MenuItem } from '../interface';
import Item from './Item';

interface ItemsRendererProps extends ItemsRenderProps {
  items: MenuItem[];
  level: number;
  onHover?(activeItem: ActiveMenuItem): void;
}

const ItemsRenderer: FC<ItemsRendererProps> = props => {
  const { items, level, origin, total, onHover } = props;
  const angle = total / items.length;

  return (
    <g>
      {items.map((item, i) => {
        const start = origin + angle * i;
        return (
          <Item
            key={item.key}
            item={item}
            level={level}
            angle={angle}
            origin={start}
            onHover={() => {
              if (!onHover) return;
              onHover({ item, origin: start, total: angle });
            }}
          />
        );
      })}
    </g>
  );
};
export default memo(ItemsRenderer);
