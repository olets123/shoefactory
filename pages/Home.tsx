import { Box, Spinner, useMediaQuery, VStack } from "@chakra-ui/react"
import Image from "next/image"
import { CSSProperties, Suspense } from "react"
import { IResource } from "."
import { SFCLargeButton } from "./reusables/SFCLargeButton"
import { onClickScroll } from "./reusables/Header"
import { SFCHeadingLarge } from "./reusables/Heading"
import { SFCTextParagraph } from "./reusables/TextParagraph"

interface HomePageProps {
  frontPageImages: IResource
}

export const HomePage = (props: HomePageProps) => {
  const [isSmallDevice] = useMediaQuery("(min-width: 800px)")
  const blurDataUrl =
    "https://res.cloudinary.com/dipbf01bb/image/upload/v1689961710/shoefactory/frontpage/lute-YZNoGvsi5E8-unsplash_nzppq5.jpg"

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
    <Suspense fallback={<Spinner size="xl" />}>
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
              src={props.frontPageImages?.resources[0]?.secure_url}
              alt="Cartoon graduates jump with happiness"
              quality="100"
              placeholder="blur"
              blurDataURL={blurDataUrl}
              priority
              sizes="100vw"
              style={imageStyle}
              width={props.frontPageImages?.resources[0]?.width}
              height={props.frontPageImages?.resources[0]?.height}
            />
            <SFCHeadingLarge
              onClick={() => onClickScroll("home")}
              inlineSize={isSmallDevice ? "max-content" : "min-content"}
              heading={"Gjøvik skofabrik"}
            />
          </Box>
          <Box display="flex" flexDirection="column" justifyContent="center" width="100%" pb={8}>
            <SFCTextParagraph text={"Leie av næringslokaler på Gjøvik?"} />
            <SFCTextParagraph text={"Da har vi løsningen for deg!"} />
          </Box>
          <Box height="full" width="full" p={2} display="flex" justifyContent="center" flexDirection={"row"}>
            <SFCLargeButton onClick={() => onClickScroll("about")} text={"Om oss"} />
            <SFCLargeButton onClick={() => onClickScroll("about")} text={"Eiendommer"} />
          </Box>
        </VStack>
      </Box>
    </Suspense>
  )
}
export default HomePage
