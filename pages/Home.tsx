import { Box, Button, Heading, Text, useMediaQuery, VStack } from "@chakra-ui/react"
import Image from "next/image"
import { CSSProperties } from "react"
import { IResource } from "."
import { inter, inter400 } from "../styles/fonts"
import { onClickScroll } from "./components/Header"

interface HomePageProps {
  frontPageImages: IResource
}

export const HomePage = (props: HomePageProps) => {
  const [isSmallDevice] = useMediaQuery("(min-width: 800px)")
  const imageStyle: CSSProperties = {
    objectFit: "cover",
    height: "100vh",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: -999,
    opacity: 0.4,
  }
  return (
    <Box display="flex" flex={1} w="full" justifyContent="center" alignItems="center">
      <VStack
        display="flex"
        flexDirection={"column"}
        justifyContent="flex-end"
        alignItems="flex-end"
        w="full"
        id="home"
        mb={10}
      >
        <Box w="full" display="flex" justifyContent="flex-end" p={2} mb={6}>
          <Image
            src={props.frontPageImages.resources[0]?.secure_url}
            alt="Cartoon graduates jump with happiness"
            quality="100"
            priority
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            // style={{ zIndex: -999 }}
            sizes="100vw"
            style={imageStyle}
            width={props.frontPageImages.resources[0]?.width}
            height={props.frontPageImages.resources[0]?.height}
          />
          <Heading
            as="h1"
            size="4xl"
            color="gray.900"
            textAlign="justify"
            fontFamily={inter.style.fontFamily}
            textTransform="uppercase"
            fontWeight={"extrabold"}
            fontStyle={inter.style.fontStyle}
            onClick={() => onClickScroll("home")}
            inlineSize={isSmallDevice ? "max-content" : "min-content"}
            overflowWrap="break-word"
          >
            Gjøvik skofabrik
          </Heading>
        </Box>
        <Box display="flex" flexDirection="column" justifyContent="center" width="100%" pb={8}>
          <Text as="p" fontSize="md" fontFamily={inter400.style.fontFamily} mt={2} textAlign="center">
            {"Leie av næringslokaler på Gjøvik?"}
          </Text>
          <Text as="p" fontSize="md" fontFamily={inter400.style.fontFamily} mt={2} textAlign="center">
            {"Da har vi løsningen for deg!"}
          </Text>
        </Box>
        <Box height="full" width="full" p={2} display="flex" justifyContent="center" flexDirection={"row"}>
          <Button
            bgColor="blackAlpha.900"
            color="whiteAlpha.900"
            variant="solid"
            size="lg"
            sx={{ mr: 2, mb: 2 }}
            onClick={() => onClickScroll("about")}
            fontFamily={inter400.style.fontFamily}
          >
            Om oss
          </Button>
          <Button
            variant="solid"
            bgColor="blackAlpha.900"
            color="whiteAlpha.900"
            size="lg"
            sx={{ mr: 2, mb: 2 }}
            fontFamily={inter400.style.fontFamily}
            onClick={() => onClickScroll("products")}
          >
            Eiendommer
          </Button>
        </Box>
      </VStack>
    </Box>
  )
}
export default HomePage
