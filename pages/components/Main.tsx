import { VStack } from "@chakra-ui/react"
import React from "react"

export type MainProps = {
  children: React.ReactNode
}

export const Main: React.FC<MainProps> = ({ children }) => (
  <VStack display="flex" h="full" w="full">
    {children}
  </VStack>
)
export default Main
