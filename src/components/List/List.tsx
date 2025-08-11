import type { ListProps } from './List.types';
import { Item } from '@c/Item';

export const List = ({ list, onRemoveItem }: ListProps) => (
  <ul>
    {list.map((item) => (
      <Item
        key={item.objectId}
        item={item}
        onRemoveItem={onRemoveItem}
      />
    ))}
  </ul>
);