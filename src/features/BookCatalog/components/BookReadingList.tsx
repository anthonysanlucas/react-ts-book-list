import { Book } from '@/types'
import { useState } from 'react'
import { ListIcon, CloseRightPanel, MoreVerticalIcon } from '@/components/Icons'
import { useBookReadingListContext } from '@/contexts/BookReadingListContext'
import { BookCardReading } from '@/components/BookCard'

const BookReadingList = () => {
  const [showReadingList, setShowReadingList] = useState(false)
  const { booksReadingContext, addBookToContext } = useBookReadingListContext()

  const handleShowReadingList = () => {
    console.log(booksReadingContext)
    setShowReadingList(!showReadingList)
  }

  return (
    <aside>
      <button
        onClick={handleShowReadingList}
        aria-label="Mostrar Lista de Lectura"
        className="fixed bottom-0 right-0 m-4 flex items-center justify-center gap-4 rounded-sm bg-neutral-950 p-3 font-medium text-neutral-200 transition-all duration-300 hover:opacity-85">
        <span>Lista de Lectura</span>
        <ListIcon />
      </button>

      {showReadingList && (
        <div className="fixed right-0 top-0 h-full w-screen bg-slate-100/50">
          <section className="fixed right-0 top-0 z-40 flex h-screen w-3/4 max-w-screen-sm transform-none flex-col gap-8 rounded-t-md bg-slate-200/70 p-4 backdrop-blur-md transition-transform lg:translate-x-0">
            <header className=" flex items-center justify-between ">
              <div className="flex items-center justify-center gap-x-4">
                <button
                  className="text-black-light hover:text-black-dark"
                  onClick={handleShowReadingList}>
                  <CloseRightPanel />
                </button>
                <h2 className="text-xl font-semibold text-black-dark">Lista de Lectura</h2>
              </div>

              <button className="text-black-light hover:text-black-dark">
                <MoreVerticalIcon />
              </button>
            </header>

            <div className="mb-10 grid size-full grid-cols-[repeat(auto-fit,minmax(12rem,_1fr))] place-items-center gap-4 overflow-auto">
              {booksReadingContext && booksReadingContext.length > 0 ? (
                booksReadingContext.map((book: Book) => (
                  <BookCardReading
                    key={book.ISBN}
                    book={book}
                    addToReadingList={() => addBookToContext(book)}
                  />
                ))
              ) : (
                <p>No hay libros en tu lista de lectura</p>
              )}
            </div>
          </section>
        </div>
      )}
    </aside>
  )
}

export default BookReadingList
