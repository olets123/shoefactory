import { Box, Heading } from "@chakra-ui/react"

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
      <Heading
        as="h2"
        size="2xl"
        noOfLines={1}
        color="gray.900"
        fontFamily={"'Albert Sans', serif"}
        onClick={() => onClickScroll("home")}
      >
        Gjøvik skofabrikk
      </Heading>
    </Box>
  )
}
export default Header
