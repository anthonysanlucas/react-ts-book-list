import { Book } from '@/types'
import { FC } from 'react'
import { AddBookIcon } from './Icons'

interface BookCardProps {
  book: Book
  addToReadingList: (book: Book) => void
}

const BookCard: FC<BookCardProps> = ({ book, addToReadingList }) => {
  return (
    <article className="flex size-full max-w-80 flex-col justify-between rounded-md border border-gray-200 bg-white/20  text-slate-300 shadow transition-all duration-150 hover:scale-105">
      <img
        className="mx-auto max-h-96 w-full max-w-80 rounded-md object-cover p-4"
        src={book.cover}
        alt={book.title}
      />

      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-balance text-xl font-semibold tracking-tight text-black-dark">
            {book.title}
          </h5>
        </a>
        {book.author && <span className="text-black-medium">{book.author.name}</span>}

        <footer className="mt-4 flex items-center justify-between">
          <span className="rounded-md bg-black-dark/10 p-1 text-xs font-medium text-black-dark sm:text-sm">
            {book.genre}
          </span>

          <button
            className="text-black-dark hover:opacity-80"
            onClick={() => addToReadingList(book)}>
            <AddBookIcon />
          </button>
        </footer>
      </div>
    </article>
  )
}

export default BookCard

export const BookCardReading: FC<BookCardProps> = ({ book }) => {
  return (
    <article className="inline-block w-max max-w-60 rounded-md border border-gray-200 bg-white/20  text-slate-300 shadow transition-all duration-150 hover:scale-105">
      <img
        className="mx-auto size-full max-h-80 max-w-80 rounded-md object-cover p-4"
        src={book.cover}
        alt={book.title}
      />
    </article>
  )
}
