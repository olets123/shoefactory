import { useRouter } from "next/router"
import { GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage } from "next"
import { Box, Button, Heading, Text, Stack, VStack, List, ListItem, UnorderedList } from "@chakra-ui/react"
import { search } from "../api/cloudinary"
import { IResource } from ".."
import { ProductsName } from "../Products"
import ImageGallery from "../components/ImageGallery"
import Layout from "../Layout"
import textData from "../text.json"
import { FaArrowLeft } from "react-icons/fa"
import { Footer } from "../components/Footer"

interface Props {
  images: IResource
}

type Params = {
  id: string
}

/* export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const products = [ProductsName.Historie]

  const paths = products.map((product) => ({
    params: { id: product },
  }))

  return {
    paths,
    fallback: true,
  }
} */

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

  return (
    <Layout>
      <VStack m={2}>
        <Stack direction="row" alignItems="center" w="full" h={250}>
          <Heading as="h6" size="md" fontFamily={"'Albert Sans', sans-serif"}>
            {"Historien om Gjøvik skofabrikk"}
          </Heading>
        </Stack>
        <Box height="full" p={2}>
          <ImageGallery images={images} />
        </Box>
        <Box m={2} pb={2}>
          <Text fontFamily="'Albert Sans', sans-serif">{textData.history.chapterOne}</Text>
        </Box>
        <Box m={2} pb={2}>
          <Text fontFamily="'Albert Sans', sans-serif">{textData.history.chapterTwo}</Text>
        </Box>
        <Box m={2} pb={2}>
          <Text fontFamily="'Albert Sans', sans-serif">{textData.history.chapterThree}</Text>
        </Box>
        <Box m={2} pb={2}>
          <UnorderedList spacing={3}>
            <ListItem>{textData.history.pointOne}</ListItem>
            <ListItem>{textData.history.pointTwo}</ListItem>
            <ListItem>{textData.history.pontThree}</ListItem>
          </UnorderedList>
        </Box>
        <Stack justifyContent="flex-start" w="100%">
          <Button leftIcon={<FaArrowLeft />} w={150} size="xs" onClick={() => router.back()}>
            Tilbake
          </Button>
        </Stack>
      </VStack>
      <VStack display="flex" width="100%" justifyContent="center" alignItems="flex-end">
        <Footer />
      </VStack>
    </Layout>
  )
}

export default Property
