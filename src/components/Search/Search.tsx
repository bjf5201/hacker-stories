import { InputWithLabel } from '@c/InputWithLabel'
import type { SearchProps } from './Search.types'

export const Search: React.FC<SearchProps> = ({ searchTerm, onSearch }) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event)
  }

  return (
    <div>
      <InputWithLabel id="search" label="Search" value={searchTerm} onInputChange={handleSearch} />
      <p>
        Searching for <strong>{searchTerm}</strong>.
      </p>
    </div>
  )
}
