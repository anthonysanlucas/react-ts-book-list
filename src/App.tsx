import { Toaster } from 'react-hot-toast'
import './App.css'
import BookCatalog from '@/features/BookCatalog/BookCatalog'
import HeaderPage from './components/HeaderPage'
import { BookListContextProvider } from './contexts/BookListContext'

function App() {
  return (
    <>
      <Toaster />
      <HeaderPage />
      <main className="mx-auto">
        <BookListContextProvider>
          <BookCatalog />
        </BookListContextProvider>
      </main>
    </>
  )
}

export default App
