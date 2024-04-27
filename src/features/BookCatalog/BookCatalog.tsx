import { useEffect } from 'react'
import BookList from '@/features/BookCatalog/components/BookList/BookList'
import BookReadingList from '@/features/BookCatalog/components/BookReadingList'
import { getBooks } from '@/services/books.service'
import { useBookListContext } from '@/contexts/BookListContext'
import { BookReadingListContextProvider } from '@/contexts/BookReadingListContext'

const BookCatalog = () => {
  const { booksContext, setBooksContext } = useBookListContext()

  useEffect(() => {
    getBooks().then(data => {
      setBooksContext(data)
    })
  }, [setBooksContext])

  return (
    <section className="section-container">
      <section className="relative">
        <BookReadingListContextProvider>
          <BookList books={booksContext ?? []} />
          <BookReadingList />
        </BookReadingListContextProvider>
      </section>
    </section>
  )
}

export default BookCatalog
