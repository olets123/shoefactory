import { useRouter } from "next/router"
import { GetServerSideProps, NextPage } from "next"
import {
  Box,
  Button,
  Heading,
  HStack,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react"
import { search } from "../api/cloudinary"
import { IResource } from ".."
import { ProductsName, transformName } from "../Products"
import ImageGallery from "../components/ImageGallery"
import Layout from "../Layout"
import { Footer } from "../components/Footer"
import { FaArrowLeft } from "react-icons/fa"
import textData from "../text.json"
import { GrLocation } from "react-icons/gr"
import { inter, inter400 } from "../../styles/fonts"

interface Props {
  images: IResource
}

type Params = {
  id: string
}

export const getServerSideProps: GetServerSideProps<Props, Params> = async ({ params }) => {
  const id = params ? params.id : ""

  const images = await search({
    expression: `folder="shoefactory/${id}"`,
  })

  return {
    props: { images: images },
  }
}

const Property: NextPage<Props> = ({ images }) => {
  const router = useRouter()
  const { id: dynamicId } = router.query
  const name = dynamicId?.toString() ? dynamicId.toString() : "eiendom"
  const [isSmallDevice] = useMediaQuery("(min-width: 800px)")

  return (
    <Layout>
      <VStack h={"full"} m={2} pt={2}>
        <Stack direction="row" width="100%" justifyContent="flex-start" alignItems="flex-start" h={50} ml={4}>
          <Box display="flex" justifyContent="flex-start" ml={2} mt={2}>
            <Button
              variant="ghost"
              bgColor="whiteAlpha.900"
              color="blackAlpha.900"
              leftIcon={<FaArrowLeft />}
              w={30}
              size="xs"
              onClick={() => router.push("/")}
            />
          </Box>
          <Heading width="100%" fontFamily={"'Albert Sans', sans-serif"}>
            Leie av {transformName(name)}
          </Heading>
        </Stack>
        <Box height="full%" p={2} m={2}>
          <ImageGallery images={images} />
        </Box>
        <Box m={2} width={isSmallDevice ? 800 : "100%"}>
          <Box m={2} p={2}>
            <Heading size="sm" fontFamily={inter.style.fontFamily} mt={2} mb={2}>
              Kort om {transformName(name)}
            </Heading>
            {dynamicId === ProductsName.Storgata ? (
              <UnorderedList spacing={3} mt={6} mb={6}>
                <ListItem>{"Storgata 24-26 as driver utleie av p-plasser øverst i Storgata på Gjøvik."}</ListItem>
                <ListItem>{"Det er forretningsvirksomhet i butikklokalene mot Storgata"}</ListItem>
                <ListItem>{"Storgata 24-26 AS eies 100% av AS Gjøvik Skofabrik."}</ListItem>
              </UnorderedList>
            ) : null}
            <Text fontFamily={inter400.style.fontFamily}>
              {dynamicId === ProductsName.Jettegården ? (
                <>{textData.about.jetteGardDescription}</>
              ) : dynamicId === ProductsName.Rambekk ? (
                <>{textData.about.rambekkDescription}</>
              ) : dynamicId === ProductsName.Storgata ? (
                <>{textData.about.storgataDescription}</>
              ) : null}
            </Text>
          </Box>
          <Box display="flex" flexDirection="column" w="full" m={2} p={2}>
            <Heading size="sm" fontFamily={inter400.style.fontFamily} mt={2} mb={2}>
              Nøkkelinfo:
            </Heading>
            <HStack>
              <GrLocation />
              <Text fontFamily={inter400.style.fontFamily}>
                {dynamicId === ProductsName.Jettegården ? (
                  <>{textData.about.jetteGaardAddress}</>
                ) : dynamicId === ProductsName.Rambekk ? (
                  <>{textData.about.rambekkAddress}</>
                ) : dynamicId === ProductsName.Storgata ? (
                  <>{textData.about.storgataAdress}</>
                ) : null}
              </Text>
            </HStack>
          </Box>
        </Box>
      </VStack>
      <VStack display="flex" width="100%" justifyContent="center" alignItems="flex-end">
        <Footer />
      </VStack>
    </Layout>
  )
}

export default Property
