import { Box, VStack } from "@chakra-ui/react"
import React from "react"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Main } from "./components/Main"

export type LayoutProps = {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <VStack display="flex" flexDirection="column" h="full" w="full">
      <Header />
      <Main>{children}</Main>
      <Box display="flex" width="100%" justifyContent="center" alignItems="flex-end">
        <Footer />
      </Box>
    </VStack>
  )
}
export default Layout
