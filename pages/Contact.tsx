import { Box, Divider, Heading, HStack, useMediaQuery, VStack } from "@chakra-ui/react"

export const ContactPage = () => {
  const [isSmallDevice] = useMediaQuery("(min-width: 800px)")

  return (
    <Box id="contact" p={2} bgColor="black">
      <Heading
        as="h2"
        size="2xl"
        color="gray.900"
        fontFamily={"'Albert Sans', sans-serif"}
        justifyContent="flex-start"
        width="full"
      >
        Kontakt
      </Heading>
      <HStack w="full">
        <Divider variant="solid" orientation="horizontal" size="md" borderWidth="1px" borderColor="blackAlpha.200" />
      </HStack>
    </Box>
  )
}
