import { Item } from '@c/Item'
import type { ListProps } from './List.types'

export const List = ({ list, onRemoveItem }: ListProps) => (
  <ul>
    {list.map((item) => (
      <Item key={item.objectId} item={item} onRemoveItem={onRemoveItem} />
    ))}
  </ul>
)
