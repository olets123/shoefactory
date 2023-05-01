import { Box, Button, Heading, useMediaQuery, VStack } from "@chakra-ui/react"
import Image from "next/image"
import { Folder, IResource } from "."
import { onClickScroll } from "./components/Header"

export interface IHomeProps {
  jettegaarden: IResource
  rambekk: IResource
  history: IResource
  folder: Folder
}

export const HomePage = (props: IHomeProps) => {
  const [isSmallDevice] = useMediaQuery("(min-width: 800px)")
  return (
    <Box w="full" h="full" mt={16}>
      <VStack
        display="flex"
        flexDirection={isSmallDevice ? "row" : "column"}
        justifyContent="space-between"
        alignItems="center"
        bgColor="white"
        h="full"
        w="full"
        id="home"
        mb={6}
      >
        <Box h="full" w="full" p={2} mt={20}>
          <Image
            key={props.jettegaarden.resources[10].asset_id}
            width={600}
            height={400}
            src={props.jettegaarden.resources[10].secure_url}
            sizes="100vw"
            alt="sample-test"
          />
        </Box>
        {!isSmallDevice && (
          <Box display="flex" justifyContent="center" width="100%">
            <Heading as="h3" size="1xl" noOfLines={1} fontFamily={"'Albert Sans', sans-serif"}>
              Gjøvik skofabrikk
            </Heading>
          </Box>
        )}
        <Box
          height="full"
          width="full"
          p={2}
          display="flex"
          justifyContent="center"
          flexDirection={isSmallDevice ? "column" : "row"}
        >
          <Button
            variant="solid"
            bgColor="blackAlpha.200"
            size="lg"
            sx={{ mr: 2, mb: 2 }}
            fontFamily={"'Albert Sans', sans-serif"}
            onClick={() => onClickScroll("products")}
          >
            Eiendommer
          </Button>
          <Button
            bgColor="blackAlpha.200"
            variant="solid"
            size="lg"
            sx={{ mr: 2, mb: 2 }}
            onClick={() => onClickScroll("about")}
            fontFamily={"'Albert Sans', sans-serif"}
          >
            Om oss
          </Button>
        </Box>
      </VStack>
    </Box>
  )
}
