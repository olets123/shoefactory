import { Box, Heading, useMediaQuery, VStack, Text, HStack, Divider, Button } from "@chakra-ui/react"
import textData from "./text.json"
import Link from "next/link"
import Image from "next/image"
import { IResource } from "."
import { inter, inter400 } from "../styles/fonts"

export interface IAboutProps {
  history: IResource
}

export const HistoryPage = (props: IAboutProps) => {
  const [isSmallDevice] = useMediaQuery("(min-width: 1020px)")

  return (
    <Box id="about" m={isSmallDevice ? 24 : 8}>
      <Heading
        as="h2"
        size="2xl"
        color="gray.900"
        fontFamily={inter.style.fontFamily}
        justifyContent="flex-start"
        width="100%"
        mb={2}
      >
        Historie
      </Heading>
      <HStack w="100%">
        <Divider variant="solid" orientation="horizontal" size="md" borderWidth="1px" borderColor="blackAlpha.200" />
      </HStack>
      <Box display="flex" flexDirection={isSmallDevice ? "row" : "column"}>
        <Box display="flex" flexDirection="column" mt={8} width={"full"}>
          {props.history && props.history.resources && (
            <Image
              src={props.history.resources[3].secure_url}
              width={600}
              height={isSmallDevice ? props.history.resources[3].height : 600}
              alt="history-pic"
            />
          )}

          <Text as="p" fontSize="sm" fontStyle="italic" fontFamily={inter400.style.fontFamily} mt={2}>
            {"Odd Onsrud viser fram Adidas-sko (ca. 1960)"}
          </Text>
        </Box>
        <Box display="flex" flexDirection="column" height="full" width={"full"} p={2} mt={6}>
          <Heading size="md" fontFamily={inter.style.fontFamily}>
            {"Mer om GS"}
          </Heading>
          <Text
            noOfLines={isSmallDevice ? [5, 10] : [4]}
            textOverflow="ellipsis"
            fontFamily={inter400.style.fontFamily}
          >
            {textData.history.chapterOne}
          </Text>
          <Link
            key={`link-key`}
            href={{
              pathname: `/about/[id]`,
              query: { id: `history` },
            }}
          >
            <Button variant="outline" sx={{ mr: 2, mt: 8 }} fontFamily={inter400.style.fontFamily}>
              Les mer
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}
export default HistoryPage