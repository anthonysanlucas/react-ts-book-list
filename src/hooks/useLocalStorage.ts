import { toastService } from '@/services/toast.service'
import { Book } from '@/types'
import { useState } from 'react'

export function useLocalStorage(key: string, initialValue: unknown = []) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : []
    } catch (error) {
      toastService('😕', 'Error al cargar la lista de lectura')

      return initialValue
    }
  })

  const setValue = (value: Book[]) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setStoredValue(value)

      toastService('✅', 'Libro añadido a tu lista de lectura')
    } catch (error) {
      console.error('Error al actualizar localStorage:', error)
    }
  }

  return [storedValue, setValue]
}
