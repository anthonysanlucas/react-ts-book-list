import React from 'react'
import BookCard from '@/components/BookCard'
import { Book, BookObject } from '@/types'
import { useBookReadingListContext } from '@/contexts/BookReadingListContext'

const BookSection: React.FC<{
  filteredBooks: BookObject[]
}> = ({ filteredBooks }) => {
  const { addBookToContext } = useBookReadingListContext()

  const handleAddToReadingList = (book: Book) => {
    addBookToContext(book)
  }

  return (
    <section className="mt-8 grid min-h-64 w-full grid-cols-[repeat(auto-fit,minmax(14rem,_1fr))] place-items-center gap-4 lg:mt-10">
      {filteredBooks.length === 0 ? (
        <p className="text-center text-gray-500">No hay libros que coincidan con tu búsqueda</p>
      ) : (
        filteredBooks?.map(({ book }) => (
          <BookCard
            key={book.ISBN}
            book={book}
            addToReadingList={() => handleAddToReadingList(book)}
          />
        ))
      )}
    </section>
  )
}

export default BookSection
