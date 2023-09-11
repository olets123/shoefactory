import { Button, ButtonProps } from "@chakra-ui/react"
import { inter400 } from "@/fonts"

type SmallButtonProps = {
  text: string
} & Pick<ButtonProps, "onClick" | "leftIcon" | "variant">

export const SFCSmallButton = (props: SmallButtonProps) => {
  return (
    <Button
      variant="solid"
      size="sm"
      leftIcon={props.leftIcon}
      onClick={props.onClick}
      fontFamily={inter400.style.fontFamily}
    >
      {props.text}
    </Button>
  )
}

export default SFCSmallButton
