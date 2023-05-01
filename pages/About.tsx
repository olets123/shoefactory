import { Box, Heading, useMediaQuery, VStack, Text, HStack, Divider, Button } from "@chakra-ui/react"
import textData from "./text.json"
import Link from "next/link"
import Image from "next/image"
import { IResource } from "."

export interface IAboutProps {
  history: IResource
}

export const AboutPage = (props: IAboutProps) => {
  const [isSmallDevice] = useMediaQuery("(min-width: 1200px)")

  return (
    <Box id="about" w="full" p={2}>
      <Heading
        as="h2"
        size="2xl"
        color="gray.900"
        fontFamily={"'Albert Sans', sans-serif"}
        justifyContent="flex-start"
        width="full"
        mb={2}
      >
        Om oss
      </Heading>
      <HStack w="full">
        <Divider variant="solid" orientation="horizontal" size="md" borderWidth="1px" borderColor="blackAlpha.200" />
      </HStack>
      <VStack display="flex" flexDirection={isSmallDevice ? "row" : "column"} w="full" sx={{ mb: 8 }}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          h="full"
          width={isSmallDevice ? 600 : "full"}
          p={2}
        >
          {props.history.resources && (
            <Image
              src={props.history.resources[0].secure_url}
              width={props.history.resources[0].width}
              height={props.history.resources[0].height}
              alt="history-pic"
            />
          )}
          <Text as="p" fontSize="sm" fontStyle="italic" fontFamily="'Albert Sans', sans-serif" mt={2}>
            {"Odd Onsrud viser fram Adidas-sko (ca. 1960)"}
          </Text>
        </Box>
        <Box display="flex" flexDirection="column" height="full" width={isSmallDevice ? 400 : "full"} p={2}>
          <Heading size="md" fontFamily="'Albert Sans', sans-serif" mb={2}>
            {"Historie"}
          </Heading>
          <Text noOfLines={[5, 10, 25]} textOverflow="ellipsis" fontFamily="'Albert Sans', sans-serif">
            {textData.history.chapterOne}
          </Text>
          <Link
            key={`link-key`}
            href={{
              pathname: `/about/[id]`,
              query: { id: `history` },
            }}
          >
            <Button variant="outline" sx={{ mr: 2, mt: 8 }} fontFamily={"'Albert Sans', sans-serif"}>
              Mer historie ...
            </Button>
          </Link>
        </Box>
      </VStack>
    </Box>
  )
}
export default AboutPage
