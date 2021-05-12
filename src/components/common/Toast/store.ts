import { writable } from 'svelte/store'

import type { ToastMessageType, ToastType } from '@/types'

const TIMEOUT = 5000 // 5 seconds

function createToasts() {
  const { subscribe, update } = writable([] as ToastMessageType[])
  let toastCount = 0

  const clearAllToast = () =>
    update((messages) => {
      messages.forEach((message) => {
        clearTimeout(message.timerId)
      })

      return []
    })

  const clearToast = (id: string) =>
    update((messages) =>
      messages.reduce((acc, message) => {
        if (message.id === id) {
          clearTimeout(message.timerId)
        } else {
          acc = [...acc, message]
        }

        return acc
      }, [] as ToastMessageType[])
    )
  const addToast = (message: string, type: ToastType) => {
    toastCount++
    const timerId: NodeJS.Timeout = setTimeout(
      clearToast.bind(undefined, String(toastCount)),
      TIMEOUT
    )

    update((messages) => [
      ...messages,
      {
        id: String(toastCount),
        message,
        type,
        timerId,
      } as ToastMessageType,
    ])
  }

  const infoToast = (message) => addToast(message, 'info')
  const warningToast = (message) => addToast(message, 'warning')
  const successToast = (message) => addToast(message, 'success')
  const errorToast = (message) => addToast(message, 'error')

  return {
    subscribe,
    addToast,
    infoToast,
    warningToast,
    successToast,
    errorToast,
    clearToast,
    clearAllToast,
  }
}

export const toasts = createToasts()
