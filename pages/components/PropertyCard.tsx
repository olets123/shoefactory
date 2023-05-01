import { Card, CardBody, CardFooter, Heading, Stack, Divider, ButtonGroup, Text } from "@chakra-ui/react"
import Image from "next/image"

interface IPropertyCardProps {
  srcUrl: string
  heading: string
  bodyText: string
  buttons: React.ReactNode
}

export const PropertyCard = ({ srcUrl, heading, bodyText, buttons }: IPropertyCardProps) => {
  return (
    <Card maxW="md" m={2} backgroundColor="white">
      <CardBody>
        <Image src={srcUrl} alt="property images for gjovik skofabrikk" width={300} height={300} />
        <Stack mt="6" spacing="3">
          <Heading size="md" fontFamily={"'Albert Sans', sans-serif"}>
            {heading}
          </Heading>
          <Text fontFamily={"'Albert Sans', sans-serif"}>{bodyText}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">{buttons}</ButtonGroup>
      </CardFooter>
    </Card>
  )
}
export default PropertyCard
