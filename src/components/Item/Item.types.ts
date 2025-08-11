import type { Blog } from '@c/blogs';

export type ItemProps = {
  item: Blog;
  onRemoveItem: (item: Blog) => void;
};