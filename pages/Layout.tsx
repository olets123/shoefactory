import { VStack } from "@chakra-ui/react"
import React from "react"
import { Header } from "./components/Header"
import { Main } from "./components/Main"

export type LayoutProps = {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <VStack display="flex" flexDirection="column" h="full" w="full">
        <Header />
        <Main>{children}</Main>
      </VStack>
    </>
  )
}
export default Layout
