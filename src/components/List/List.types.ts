import type { Blog } from '@c/blogs'

export type ListProps = {
  list: Blog[]
  onRemoveItem: (item: Blog) => void
}
