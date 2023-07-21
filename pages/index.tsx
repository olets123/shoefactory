import { VStack } from "@chakra-ui/react"
import { GetServerSideProps } from "next"
import { HistoryPage } from "./History"
import { folders, search } from "./api/cloudinary"
import { Footer } from "./components/Footer"
import { HomePage } from "./Home"
import { ProductsPage } from "./Products"
import { AboutUsPage } from "./AboutUs"

export interface IResource {
  resources: IAsset[]
}

export interface IAsset {
  asset_id: string
  public_id: string
  format: string
  version: number
  resource_type: string
  type: string
  created_at: string
  bytes: number
  width: number
  height: number
  backup: boolean
  access_mode: string
  url: string
  secure_url: string
}

export interface Folder {
  folders: FolderData[]
}

export interface FolderData {
  name: string
  path: string
}

export interface IHomeProps {
  jettegaarden: IResource
  rambekk: IResource
  history: IResource
  storgata: IResource
  frontPageImages: IResource
  folder: Folder
}

export const getServerSideProps: GetServerSideProps<IHomeProps> = async () => {
  const imageFolders = await folders()
  const rambekkImgs = await search({
    expression: `folder="shoefactory/building1"`,
  })
  const jetteGaardenImgs = await search({
    expression: `folder="shoefactory/jettegaarden"`,
  })

  const storgataImgs = await search({
    expression: `folder="shoefactory/storgata"`,
  })

  const historyImgs = await search({
    expression: `folder="shoefactory/history"`,
  })

  const homeImgs = await search({
    expression: `folder="shoefactory/frontpage"`,
  })

  return {
    props: {
      jettegaarden: jetteGaardenImgs,
      rambekk: rambekkImgs,
      storgata: storgataImgs,
      history: historyImgs,
      folder: imageFolders,
      frontPageImages: homeImgs,
    },
  }
}

export const Home = ({ jettegaarden, rambekk, history, storgata, folder, frontPageImages }: IHomeProps) => {
  return (
    <VStack display="flex" height="100%">
      <VStack height={"100vh"} display="flex">
        <HomePage frontPageImages={frontPageImages} />
      </VStack>
      <VStack height={"100%"} display="flex">
        <AboutUsPage />
      </VStack>
      <VStack height={"100vh"} display="flex">
        <HistoryPage history={history} />
      </VStack>
      <VStack height={"100%"}>
        <ProductsPage jettegaarden={jettegaarden} rambekk={rambekk} storgata={storgata} folder={folder} />
      </VStack>
      <VStack position="relative" bottom={0} width="100%" height="100%">
        <Footer />
      </VStack>
    </VStack>
  )
}

export default Home
