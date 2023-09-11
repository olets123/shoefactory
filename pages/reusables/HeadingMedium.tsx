import { Heading } from "@chakra-ui/react"
import { inter } from "../../styles/fonts"
import { SFCHeadingProps } from "./Heading"

export const SFCHeadingMedium = (props: SFCHeadingProps) => {
  return (
    <Heading as="h2" size="2xl" noOfLines={1} color="gray.900" fontFamily={inter.style.fontFamily} {...props}>
      {props.heading}
    </Heading>
  )
}
export default SFCHeadingMedium
