import type { FC } from 'react'

import { QueryClient, QueryClientProvider, useQueryErrorResetBoundary } from 'react-query'
import { ErrorBoundary } from 'react-error-boundary'
import { Box, Button } from '@chakra-ui/react'

const queryClient = new QueryClient()

const QueryProvider: FC = ({ children }) => {
  const { reset } = useQueryErrorResetBoundary()

  return (
    <ErrorBoundary
      fallbackRender={({ error, resetErrorBoundary }) => (
        <Box>
          There was an error! <Button onClick={() => resetErrorBoundary()}>Try again</Button>
          <pre style={{ whiteSpace: 'normal' }}>{error.message}</pre>
        </Box>
      )}
      onReset={reset}
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ErrorBoundary>
  )
}

export default QueryProvider
