import toast from 'react-hot-toast'

export const toastService = (icon: string, message: string) => {
  toast.success(message, {
    duration: 4000,
    position: 'top-right',
    icon
  })
}
