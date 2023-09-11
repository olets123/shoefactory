import { Box } from "@chakra-ui/react"
import { SFCHeadingMedium } from "./HeadingMedium"

export const HeaderLinkNames = {
  Home: "home",
} as const

export const onClickScroll = (page: string) => {
  const element = document.getElementById(`${page}`)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

export const Header = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      height={59}
      width="100%"
      background="white"
      borderWidth={1}
      borderBottomColor="gray.100"
      borderBottom={1}
      borderBottomStyle="solid"
      pt={2}
      pb={2}
      sx={{ position: "fixed", top: 0, zIndex: 999 }}
    >
      <SFCHeadingMedium onClick={() => onClickScroll("home")} heading="Gjøvik skofabrikk" />
    </Box>
  )
}
export default Header
