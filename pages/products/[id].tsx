import { useRouter } from "next/router"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { Box, Button, Heading, HStack, Stack, Text, VStack } from "@chakra-ui/react"
import { search } from "../api/cloudinary"
import { IResource } from ".."
import { ProductsName, transformName } from "../Products"
import ImageGallery from "../components/ImageGallery"
import Layout from "../Layout"
import { Footer } from "../components/Footer"
import { FaArrowLeft } from "react-icons/fa"
import textData from "../text.json"
import { GrLocation } from "react-icons/gr"

interface Props {
  images: IResource
}

type Params = {
  id: string
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const products = [ProductsName.Jettegården, ProductsName.Rambekk]

  const paths = products.map((product) => ({
    params: { id: product },
  }))

  return {
    paths,
    fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
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

  return (
    <Layout>
      <VStack h={"full"} m={2}>
        <Stack direction="row" alignItems="center" h={150}>
          <Heading fontFamily={"'Albert Sans', sans-serif"}>{transformName(name)}</Heading>
        </Stack>
        <Box height="full" m={2}>
          <ImageGallery images={images} />
        </Box>
        <Box m={2} pb={2}>
          <Heading size="sm" fontFamily="'Albert Sans', sans-serif" mt={2} mb={2}>
            Kort om {transformName(name)}
          </Heading>
          <Text fontFamily="'Albert Sans', sans-serif">
            {dynamicId === ProductsName.Jettegården
              ? textData.about.jetteGardDescription
              : textData.about.rambekkDescription}
          </Text>
        </Box>
        <Box display="flex" flexDirection="column" w="full" m={2} pb={6}>
          <Heading size="sm" fontFamily="'Albert Sans', sans-serif" mt={2} mb={2}>
            Nøkkelinfo:
          </Heading>
          <HStack>
            <GrLocation />
            <Text fontFamily="'Albert Sans', sans-serif">
              {dynamicId === ProductsName.Jettegården
                ? textData.about.jetteGaardAddress
                : textData.about.rambekkAddress}
            </Text>
          </HStack>
        </Box>
        <Box m={2}>
          <Stack justifyContent="flex-start" w="100%">
            <Button leftIcon={<FaArrowLeft />} w={150} size="xs" onClick={() => router.back()}>
              Tilbake
            </Button>
          </Stack>
        </Box>
      </VStack>
      <VStack display="flex" width="100%" justifyContent="center" alignItems="flex-end">
        <Footer />
      </VStack>
    </Layout>
  )
}

export default Property
