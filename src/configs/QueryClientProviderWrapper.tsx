import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React from "react"

type Props = {
  children: React.ReactNode
}

export const QueryClientProviderWrapper = ({ children }: Props) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  })

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
