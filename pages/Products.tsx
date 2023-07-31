import { Box, Button, Divider, Heading, HStack, useMediaQuery } from "@chakra-ui/react"
import Link from "next/link"
import { Folder, IResource } from "."
import { PropertyCard } from "./components/PropertyCard"
import textData from "./text.json"
import { inter, inter400 } from "../styles/fonts"

export const ProductsName = {
  Rambekk: "building1",
  Historie: "history",
  Jettegården: "jettegaarden",
  Storgata: "storgata",
} as const

export const transformName = (name: string): string => {
  let btnName: string = ""
  switch (name) {
    case ProductsName["Rambekk"]:
      btnName = "Rambekk"
      break
    case ProductsName["Jettegården"]:
      btnName = "Jettegården"
      break
    case ProductsName["Storgata"]:
      btnName = "Storgata"
      break
    default:
      break
  }
  return btnName
}
export interface IProductProps {
  jettegaarden: IResource
  rambekk: IResource
  storgata: IResource
  folder: Folder
}

export const ProductsPage = ({ folder, jettegaarden, rambekk, storgata }: IProductProps) => {
  const [isSmallDevice] = useMediaQuery("(min-width: 1020px)")

  return (
    <Box id="products" m={isSmallDevice ? 24 : 8}>
      <Heading
        as="h2"
        size="2xl"
        color="gray.900"
        fontFamily={inter.style.fontFamily}
        justifyContent="flex-start"
        width="full"
        pl={2}
        mb={2}
      >
        Eiendom
      </Heading>
      <HStack w="full">
        <Divider variant="solid" orientation="horizontal" size="md" borderWidth="1px" borderColor="blackAlpha.200" />
      </HStack>
      <Box display="flex" flexDirection={isSmallDevice ? "row" : "column"} justifyContent="center" sx={{ mb: 8 }}>
        <PropertyCard
          key={`${jettegaarden?.resources[0].asset_id}`}
          srcUrl={jettegaarden?.resources[0].secure_url}
          heading="Jettegården"
          bodyText={textData.about.jetteGaardenImageText}
          buttons={
            <Link
              key={`link-key-jettegaarden`}
              href={{
                pathname: `/products/[id]`,
                query: { id: `jettegaarden` },
              }}
            >
              <Button variant="outline" sx={{ mr: 2 }} fontFamily={inter400.style.fontFamily}>
                Les mer
              </Button>
            </Link>
          }
        />
        <PropertyCard
          key={`${rambekk?.resources[3].asset_id}`}
          srcUrl={rambekk?.resources[3].secure_url}
          heading="Rambekk"
          bodyText={textData.about.rambekkDescriptionFrontPage}
          buttons={
            <Link
              key={`link-key-${folder?.folders[0].name}`}
              href={{
                pathname: `/products/[id]`,
                query: { id: `${folder?.folders[0].name}` },
              }}
            >
              <Button variant="outline" sx={{ mr: 2 }} fontFamily={inter400.style.fontFamily}>
                Les mer
              </Button>
            </Link>
          }
        />
        <PropertyCard
          key={`${storgata?.resources[0]?.asset_id}`}
          srcUrl={storgata?.resources[0]?.secure_url}
          heading="Storgata 24-26 AS"
          bodyText={textData.about.storgataImageText}
          buttons={
            <Link
              key={`link-key-${folder?.folders[0].name}`}
              href={{
                pathname: `/products/[id]`,
                query: { id: "storgata" },
              }}
            >
              <Button variant="outline" sx={{ mr: 2 }} fontFamily={inter400.style.fontFamily}>
                Les mer
              </Button>
            </Link>
          }
        />
      </Box>
    </Box>
  )
}
export default ProductsPage
