import { VStack } from "@chakra-ui/react"

export type MainProps = {
  children: React.ReactNode
}

export const Main = ({ children }: MainProps) => (
  <VStack display="flex" h="full" w="full">
    {children}
  </VStack>
)
export default Main
