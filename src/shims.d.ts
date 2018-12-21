import Vue from 'vue'

export type ToastOptions = {
  content: string
  duration?: number
  parentNode?: Element,
  hasMask?: boolean
}

export type ToastConstructorOptions = {
  icon?: string,
  position?: string
} & ToastOptions

interface FakerOpt {
  content: string
  duration?: number
  parentNode?: Element
  hasMask?: boolean
  icon?: string
  position?: string
}

export interface Toast {
  (options?: FakerOpt): void
  info(content: string, duration?: number, hasMask?: boolean, parentNode?: Element): void
  succeed(content: string, duration?: number, hasMask?: boolean, parentNode?: Element): void
  failed(content: string, duration?: number, hasMask?: boolean, parentNode?: Element): void
  loading(content: string, duration?: number, hasMask?: boolean, parentNode?: Element): void
  hide(): void
}
declare module 'vue/types/vue' {
  interface Vue {
    $loading: Toast
    $handleError: (error:any) => void
  }
}
