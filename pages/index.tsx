import { VStack } from "@chakra-ui/react"
import { GetServerSideProps } from "next"
import { AboutPage } from "./About"
import { folders, search } from "./api/cloudinary"
import { Footer } from "./components/Footer"
import { HomePage, IHomeProps } from "./Home"
import { ProductsPage } from "./Products"

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

export const getServerSideProps: GetServerSideProps<IHomeProps> = async () => {
  // const results = await resources()
  const imageFolders = await folders()
  const rambekkImgs = await search({
    expression: `folder="shoefactory/building1"`,
  })
  const jetteGaardenImgs = await search({
    expression: `folder="shoefactory/jettegaarden"`,
  })

  const historyImgs = await search({
    expression: `folder="shoefactory/history"`,
  })

  return {
    props: { jettegaarden: jetteGaardenImgs, rambekk: rambekkImgs, history: historyImgs, folder: imageFolders },
  }
}

export const Home = ({ jettegaarden, rambekk, history, folder }: IHomeProps) => {
  return (
    <VStack>
      <VStack height="full">
        <HomePage jettegaarden={jettegaarden} rambekk={rambekk} folder={folder} history={history} />
      </VStack>
      <VStack height={"full"}>
        <AboutPage history={history} />
      </VStack>
      <VStack height="full">
        <ProductsPage jettegaarden={jettegaarden} rambekk={rambekk} folder={folder} />
      </VStack>
      <VStack display="flex" width="100%" justifyContent="center" alignItems="flex-end">
        <Footer />
      </VStack>
    </VStack>
  )
}

export default Home
