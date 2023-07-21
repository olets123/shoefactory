import { Card, CardBody, CardFooter, Heading, Stack, Divider, ButtonGroup, Text, useMediaQuery } from "@chakra-ui/react"
import Image from "next/image"
import { inter, inter400 } from "../../styles/fonts"

interface IPropertyCardProps {
  srcUrl: string
  heading: string
  bodyText: string
  buttons: React.ReactNode
  fullSize?: boolean
}

export const PropertyCard = ({ srcUrl, heading, bodyText, buttons, fullSize }: IPropertyCardProps) => {
  const [isSmallDevice] = useMediaQuery("(min-width: 1020px)")

  return (
    <Card
      maxW={fullSize ? "100%" : "md"}
      backgroundColor="white"
      sx={{ m: 4, p: 0 }}
      height={isSmallDevice ? 650 : "100%"}
    >
      <CardBody>
        <Image src={srcUrl} alt="property images for gjovik skofabrikk" width={300} height={300} />
        <Stack mt="6" spacing="3">
          <Heading size="md" fontFamily={inter.style.fontFamily}>
            {heading}
          </Heading>
          <Text fontFamily={inter400.style.fontFamily}>{bodyText}</Text>
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
