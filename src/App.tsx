import * as React from 'react';

import type { Blog } from '@c/blogs';
import { blogs } from '@c/blogs';
import { InputWithLabel } from '@c/InputWithLabel';
import { List } from '@c/List';

const useStorageState = (key: string, initialState: string) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initialState
  );

  React.useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue] as const;
};

export const App = () => {
  const stories = blogs as Blog[]

  const [searchTerm, setSearchTerm] = useStorageState('searchTerm', '');

  const handleSearch = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  /* TODO: Implement remove item functionality */
  const handleRemoveItem = (item: Blog) => {
    console.log("Remove item:", item);
  };

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <InputWithLabel
        id="search"
        label="Search"
        value={searchTerm}
        onInputChange={handleSearch}
      />

      <hr />

      <List list={searchedStories} onRemoveItem={handleRemoveItem} />
    </div>
  );
};