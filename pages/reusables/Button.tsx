import { inter400 } from "@/fonts"
import { Button, ButtonProps } from "@chakra-ui/react"

type LargeButtonProps = {
  text: string
} & Pick<ButtonProps, "onClick" | "variant">

export const SFCLargeButton = (props: LargeButtonProps) => {
  return (
    <Button
      bgColor="blackAlpha.900"
      color="whiteAlpha.900"
      variant={props.variant}
      size="lg"
      sx={{ mr: 2, mb: 2 }}
      onClick={props.onClick}
      fontFamily={inter400.style.fontFamily}
    >
      {props.text}
    </Button>
  )
}

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
