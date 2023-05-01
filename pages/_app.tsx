import { ChakraProvider } from "@chakra-ui/react"
import type { AppProps } from "next/app"
import Layout from "./Layout"
import { useRouter } from "next/router"

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <ChakraProvider>
      <Layout>
        <Component key={router.asPath} {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}
