import { Box, Button, Divider, Heading, HStack, useMediaQuery } from "@chakra-ui/react"
import Link from "next/link"
import { Folder, IResource } from "."
import { PropertyCard } from "./components/PropertyCard"
import textData from "./text.json"

export const ProductsName = {
  Rambekk: "building1",
  Historie: "history",
  Jettegården: "jettegaarden",
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
    default:
      break
  }
  return btnName
}
export interface IProductProps {
  jettegaarden: IResource
  rambekk: IResource
  folder: Folder
}

export const ProductsPage = ({ folder, jettegaarden, rambekk }: IProductProps) => {
  const [isSmallDevice] = useMediaQuery("(min-width: 600px)")

  return (
    <div id="products">
      <Heading
        as="h2"
        size="2xl"
        color="gray.900"
        fontFamily={"'Albert Sans', sans-serif"}
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
      <Box display="flex" flexDirection={isSmallDevice ? "row" : "column"} h="full" w="full">
        <PropertyCard
          key={`${jettegaarden?.resources[10].asset_id}`}
          srcUrl={jettegaarden?.resources[10].secure_url}
          heading="Jettegården"
          bodyText={textData.about.jetteGardDescription}
          buttons={
            <Link
              key={`link-key-jettegaarden`}
              href={{
                pathname: `/products/[id]`,
                query: { id: `jettegaarden` },
              }}
            >
              <Button variant="outline" sx={{ mr: 2 }} fontFamily={"'Albert Sans', sans-serif"}>
                Les mer om Jettegården
              </Button>
            </Link>
          }
        />
        <PropertyCard
          key={`${rambekk?.resources[3].asset_id}`}
          srcUrl={rambekk?.resources[3].secure_url}
          heading="Rambekk"
          bodyText={textData.about.rambekkDescription}
          buttons={
            <Link
              key={`link-key-${folder?.folders[0].name}`}
              href={{
                pathname: `/products/[id]`,
                query: { id: `${folder?.folders[0].name}` },
              }}
            >
              <Button variant="outline" sx={{ mr: 2 }} fontFamily={"'Albert Sans', sans-serif"}>
                Les mer om {transformName(folder?.folders[0].name)}
              </Button>
            </Link>
          }
        />
      </Box>
    </div>
  )
}
export default ProductsPage
