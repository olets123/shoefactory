import { Heading, HeadingProps } from "@chakra-ui/react"
import { inter, inter400 } from "../../styles/fonts"

export interface SFCHeadingProps extends HeadingProps {
  heading: string
}

export const SFCHeadingLarge = (props: SFCHeadingProps) => {
  return (
    <Heading
      as="h1"
      size="4xl"
      color="gray.900"
      textAlign="justify"
      fontFamily={inter.style.fontFamily}
      textTransform="uppercase"
      fontWeight={"extrabold"}
      fontStyle={inter.style.fontStyle}
      overflowWrap="break-word"
      {...props}
    >
      {props.heading}
    </Heading>
  )
}
export default SFCHeadingLarge
