import { Box, ChakraProvider, CircularProgress } from "@chakra-ui/react"
import type { AppProps } from "next/app"
import Layout from "./Layout"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const router = useRouter()

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setIsLoading(!isLoading)
    })

    router.events.on("routeChangeComplete", () => {
      setIsLoading(false)
    })
  }, [router, isLoading])

  return (
    <ChakraProvider>
      <Layout>
        {isLoading ? (
          <Box display="flex" width="100%" height={500}>
            <Box display="flex" flex={1} justifyContent="center" alignItems="flex-end" width="100%" height="100%">
              <CircularProgress isIndeterminate color="gray" size="150px" thickness="8px" />
            </Box>
          </Box>
        ) : (
          <Component key={router.asPath} {...pageProps} />
        )}
      </Layout>
    </ChakraProvider>
  )
}
