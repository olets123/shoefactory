import { useRouter } from "next/router"
import { GetServerSideProps, NextPage } from "next"
import { Box, Button, Heading, Stack, VStack, ListItem, UnorderedList, useMediaQuery, Spinner } from "@chakra-ui/react"
import { search } from "../api/cloudinary"
import { IResource } from ".."
import ImageGallery from "../reusables/ImageGallery"
import textData from "../text.json"
import { FaArrowLeft } from "react-icons/fa"
import { Footer } from "../reusables/Footer"
import { inter } from "../../styles/fonts"
import { Suspense } from "react"

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
  const [isSmallDevice] = useMediaQuery("(min-width: 800px)")

  return (
    <Suspense fallback={<Spinner size="xl" />}>
      <VStack h={"full"} m={2} pt={2}>
        <Stack direction="row" alignItems="flex-start" w="full" h={50}>
          <Box display="flex" justifyContent="flex-start" ml={2}>
            <Button
              variant="ghost"
              bgColor="whiteAlpha.900"
              color="blackAlpha.900"
              leftIcon={<FaArrowLeft />}
              w={25}
              size="xs"
              onClick={() => router.back()}
            />
          </Box>
          <Heading as="h6" size="md" fontFamily={inter.style.fontFamily}>
            {"Historien om Gjøvik skofabrikk"}
          </Heading>
        </Stack>
        <Box height="100%" p={2} mb={4}>
          <ImageGallery images={images} />
        </Box>
        <Box m={2} p={2} width={isSmallDevice ? 800 : "100%"}>
          <UnorderedList spacing={3} p={2}>
            <ListItem>{textData.history.pointOne}</ListItem>
            <ListItem>{textData.history.pointTwo}</ListItem>
            <ListItem>{textData.history.pointThree}</ListItem>
            <ListItem>{textData.history.pointFour}</ListItem>
            <ListItem>{textData.history.pointFive}</ListItem>
            <ListItem>{textData.history.point6}</ListItem>
            <ListItem>{textData.history.point7}</ListItem>
            <ListItem>{textData.history.point8}</ListItem>
            <ListItem>{textData.history.point9}</ListItem>
            <ListItem>{textData.history.point10}</ListItem>
            <ListItem>{textData.history.point11}</ListItem>
          </UnorderedList>
        </Box>
        <VStack display="flex" width="100%" justifyContent="center" alignItems="flex-end">
          <Footer />
        </VStack>
      </VStack>
    </Suspense>
  )
}

export default Property
