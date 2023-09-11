import { Box, Heading, useMediaQuery, Text, HStack, Divider, Spinner } from "@chakra-ui/react"
import textData from "./text.json"
import { inter, inter400 } from "../styles/fonts"
import { Suspense } from "react"

export const AboutUsPage = () => {
  const [isSmallDevice] = useMediaQuery("(min-width: 1020px)")

  return (
    <Suspense fallback={<Spinner size="xl" />}>
      <Box id="about" m={isSmallDevice ? 24 : 8}>
        <Heading
          as="h2"
          size="2xl"
          color="gray.900"
          fontFamily={inter.style.fontFamily}
          justifyContent="flex-start"
          width="full"
          mb={2}
        >
          Om oss
        </Heading>
        <HStack w="100%">
          <Divider variant="solid" orientation="horizontal" size="md" borderWidth="1px" borderColor="blackAlpha.200" />
        </HStack>
        <Box
          display="flex"
          flexDirection={isSmallDevice ? "row" : "column"}
          justifyContent="center"
          width={"100%"}
          h={300}
          sx={{ mb: 8, mt: 8 }}
        >
          <Text textOverflow="ellipsis" fontFamily={inter400.style.fontFamily}>
            {textData.aboutUs.description}
          </Text>
        </Box>
      </Box>
    </Suspense>
  )
}
export default AboutUsPage
