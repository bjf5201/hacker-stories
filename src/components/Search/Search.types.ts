import type { ChangeEvent } from 'react'

export type SearchProps = {
  searchTerm: string
  onSearch: (event: ChangeEvent<HTMLInputElement>) => void
}
