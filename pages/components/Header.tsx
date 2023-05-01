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
        fontFamily={"'Albert Sans', sans-serif"}
        onClick={() => onClickScroll("home")}
      >
        Gjøvik skofabrikk
      </Heading>
    </Box>
  )
  /*  : (
  <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      height={50}
      width="100%"
      background="white"
      pt={2}
      sx={{ position: "fixed", top: 0, zIndex: 999 }}
    >
      <Link color="white" onClick={() => onClickScroll("home")} sx={{ mr: 2 }}>
        Home
      </Link>
      <Link color="white" onClick={() => onClickScroll("about")} sx={{ mr: 2 }}>
        About
      </Link>
      <Link color="white" onClick={() => onClickScroll("products")} sx={{ mr: 2 }}>
        Products
      </Link>
      <Link color="white" onClick={() => onClickScroll("contact")} sx={{ mr: 2 }}>
        Contact
      </Link>
    </Box>
  ) */
}
