const HeaderPage = () => {
  return (
    <header className="my-4">
      <nav className="section-container flex flex-wrap items-center justify-between border-gray-200 bg-white">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <h1 className="text-xl font-bold leading-none tracking-tight text-gray-900">
            EDITORIAL{' '}
            <span className="underline decoration-blue-600 decoration-8 underline-offset-2">
              XYZ
            </span>
          </h1>
        </a>
        <div className="flex items-center space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 md:me-0 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom">
            <span className="sr-only">Open user menu</span>
            <img
              className="size-8 rounded-full"
              src="https://avatars.githubusercontent.com/u/93359372?v=4"
              alt="user photo"
            />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default HeaderPage
