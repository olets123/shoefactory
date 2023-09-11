import { Heading, HeadingProps } from "@chakra-ui/react"
import { inter, inter400 } from "../../styles/fonts"

interface SFCHeadingProps extends HeadingProps {
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

export const SFCHeadingMedium = (props: SFCHeadingProps) => {
  return (
    <Heading as="h2" size="2xl" noOfLines={1} color="gray.900" fontFamily={inter.style.fontFamily} {...props}>
      {props.heading}
    </Heading>
  )
}

export const SFCHeadingSmall = (props: SFCHeadingProps) => {
  return (
    <Heading size="md" fontFamily={inter.style.fontFamily ?? props.fontFamily} {...props}>
      {props.heading}
    </Heading>
  )
}
