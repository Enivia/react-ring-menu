import { FC, memo } from 'react';
import { MenuItemsProps } from '../interface';
import Item from './Item';

interface ItemsRendererProps extends MenuItemsProps {
  onHover?(props: MenuItemsProps): void;
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
              onHover({
                items: item.children || [],
                level: level + 1,
                origin: start,
                total: angle,
              });
            }}
          />
        );
      })}
    </g>
  );
};
export default memo(ItemsRenderer);
