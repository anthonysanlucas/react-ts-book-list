import { SearchIcon } from '@/components/Icons'
import React from 'react'

const FilterSection: React.FC<{
  allGenres: string[]
  allAuthors: string[]
  selectedGenre: string
  selectedAuthor: string
  setSearchBookTitle: React.Dispatch<string>
  setSelectedGenre: React.Dispatch<string>
  setSelectedAuthor: React.Dispatch<string>
}> = ({ allGenres, allAuthors, setSearchBookTitle, setSelectedGenre, setSelectedAuthor }) => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-4">
      <section className="flex items-center justify-start gap-x-4">
        <div>
          <label className="block text-black-light" htmlFor="genre">
            Género:
          </label>
          <select onChange={e => setSelectedGenre(e.target.value)}>
            <option value="all">Todos los géneros</option>
            {Array.from(new Set(allGenres)).map(genre => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-black-light" htmlFor="genre">
            Autor:
          </label>
          <select onChange={e => setSelectedAuthor(e.target.value)}>
            <option value="all">Todos los Autores</option>
            {Array.from(new Set(allAuthors)).map(author => (
              <option key={author} value={author}>
                {author}
              </option>
            ))}
          </select>
        </div>
      </section>

      <search role="search">
        <label htmlFor="review-search" className="sr-only">
          buscar libros
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <SearchIcon />
          </div>
          <input
            className="block w-full rounded-md border-2 border-slate-300 bg-transparent p-4 pl-10 text-sm text-black-dark transition-colors duration-100 placeholder:text-black-dark hover:border-primary focus:border-primary focus:outline-none focus:ring-0 sm:text-base"
            id="review-search"
            type="search"
            onChange={e => setSearchBookTitle(e.target.value)}
            placeholder="Busca por título 📚"
            required
          />
        </div>
      </search>
    </section>
  )
}

export default FilterSection
