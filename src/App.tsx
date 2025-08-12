import { useState } from 'react';

import type { Blog } from '@c/blogs';
import { blogs } from '@c/blogs';
import { List } from '@c/List';
import { Search } from '@c/Search';

export const App = () => {
  const stories = blogs as Blog[];

  const [searchTerm, setSearchTerm] = useState('');

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
  };

  /* TODO: Implement remove item functionality */
  const handleRemoveItem = (item: Blog) => {
    console.log("Remove item:", item);
  };

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search onSearch={handleSearch} searchTerm={searchTerm} />

      <hr />

      <List list={searchedStories} onRemoveItem={handleRemoveItem} />
    </div>
  );
};