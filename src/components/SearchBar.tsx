const SearchBar = () => {
  return (
    <search role="search">
      <label htmlFor="review-search" className="sr-only">
        Buscar reseñas
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className="size-4 text-primary"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          className="block w-full rounded-md border-2 border-slate-300 bg-transparent p-4 pl-10 text-sm text-black-dark transition-colors duration-100 placeholder:text-black-dark hover:border-primary focus:border-primary focus:outline-none focus:ring-0 sm:text-base"
          id="review-search"
          type="search"
          placeholder="Nombre del libro..."
          required
        />
      </div>
    </search>
  )
}
// value={search}
// onChange={e => setSearch(e.target.value)}

export default SearchBar
