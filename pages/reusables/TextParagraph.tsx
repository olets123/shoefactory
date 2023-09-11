import { Text } from "@chakra-ui/react"
import { inter400 } from "../../styles/fonts"

interface TextProps {
  text: string
}

export const SFCTextParagraph = (props: TextProps) => {
  return (
    <Text as="p" fontSize="md" fontFamily={inter400.style.fontFamily} mt={2} textAlign="center">
      {props.text}
    </Text>
  )
}
export default SFCTextParagraph
