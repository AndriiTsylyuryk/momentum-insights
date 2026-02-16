export {}

declare global {
  interface Window {
    va?: (eventName: string, properties?: Record<string, unknown>) => void
    fbq?: (action: string, event: string, data?: Record<string, unknown>) => void
    _fbq?: unknown
  }
}
