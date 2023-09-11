import { Box, useMediaQuery, Text, HStack, Divider, Button, Spinner } from "@chakra-ui/react"
import textData from "./text.json"
import Link from "next/link"
import Image from "next/image"
import { IResource } from "."
import { inter400 } from "../styles/fonts"
import { Suspense } from "react"
import { SFCHeadingMedium } from "./reusables/HeadingMedium"
import { SFCHeadingSmall } from "./reusables/HeadingSmall"

export interface IAboutProps {
  history: IResource
}

export const HistoryPage = (props: IAboutProps) => {
  const [isSmallDevice] = useMediaQuery("(min-width: 1020px)")

  return (
    <Suspense fallback={<Spinner size="xl" />}>
      <Box id="about" m={isSmallDevice ? 24 : 8}>
        <SFCHeadingMedium heading="Historie" justifyContent="flex-start" width="full" mb={2} />
        <HStack w="100%">
          <Divider variant="solid" orientation="horizontal" size="md" borderWidth="1px" borderColor="blackAlpha.200" />
        </HStack>
        <Box display="flex" flexDirection={isSmallDevice ? "row" : "column"}>
          <Box display="flex" flexDirection="column" mt={8} width={"full"}>
            {props.history && props.history.resources ? (
              <Image
                key={`history-${props.history.resources[3].asset_id}`}
                src={props.history.resources[3].secure_url}
                width={600}
                height={isSmallDevice ? props.history.resources[3].height : 600}
                alt="history-pic"
              />
            ) : null}
            <Text as="p" fontSize="sm" fontStyle="italic" fontFamily={inter400.style.fontFamily} mt={2}>
              {"Odd Onsrud viser fram Adidas-sko (ca. 1960)"}
            </Text>
          </Box>
          <Box display="flex" flexDirection="column" height="full" width={"full"} p={2} mt={6}>
            <SFCHeadingSmall heading={"Mer om Gjøvik Skofabrik"} />
            <Text
              noOfLines={isSmallDevice ? [5, 10] : [4]}
              textOverflow="ellipsis"
              fontFamily={inter400.style.fontFamily}
              mt={6}
            >
              {`${textData.history.pointOne} ${textData.history.point9} ${textData.history.point10} ${textData.history.point11}`}
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
    </Suspense>
  )
}
export default HistoryPage
