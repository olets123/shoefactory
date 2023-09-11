import { Heading } from "@chakra-ui/react"
import { inter } from "../../styles/fonts"
import { SFCHeadingProps } from "./Heading"

export const SFCHeadingSmall = (props: SFCHeadingProps) => {
  return (
    <Heading size="md" fontFamily={inter.style.fontFamily ?? props.fontFamily} {...props}>
      {props.heading}
    </Heading>
  )
}
export default SFCHeadingSmall
