import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { Book } from '@/types'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { toastService } from '@/services/toast.service'

interface BookContextType {
  booksReadingContext: Book[]
  addBookToContext: (newBook: Book) => void
}

export const BookReadingListContext = createContext<BookContextType>({
  booksReadingContext: [],
  addBookToContext: () => {}
})

export function BookReadingListContextProvider({ children }: { children: ReactNode }) {
  const [storedBooks, setStoredBooks] = useLocalStorage('reading-list', null)

  const [booksReadingContext, setBooksReadingContext] = useState<Book[]>(storedBooks)

  useEffect(() => {
    if (storedBooks !== null) {
      setBooksReadingContext(storedBooks)
    }
  }, [storedBooks])

  const addBookToContext = (newBook: Book) => {
    const isBookExist = booksReadingContext.some(book => book.ISBN === newBook.ISBN)

    if (!isBookExist) {
      const updatedBooks = [...booksReadingContext, newBook]
      setBooksReadingContext(updatedBooks)

      setStoredBooks(updatedBooks)
    } else {
      toastService('ℹ️', `El libro ${newBook.title} está en tu lista.`)
    }
  }

  const contextValue: BookContextType = {
    booksReadingContext,
    addBookToContext
  }

  return (
    <BookReadingListContext.Provider value={contextValue}>
      {children}
    </BookReadingListContext.Provider>
  )
}

export const useBookReadingListContext = () => {
  const context = useContext(BookReadingListContext)

  if (!context) {
    throw new Error(
      'useBookReadingListContext must be used within a BookReadingListContextProvider'
    )
  }

  return context
}
