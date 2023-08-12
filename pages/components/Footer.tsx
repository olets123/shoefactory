import { Box, Button, Divider, HStack, Text, useMediaQuery, VStack } from "@chakra-ui/react"
import { FaFacebook, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa"
import { GrLocation } from "react-icons/gr"
import { inter400 } from "../../styles/fonts"

export const Footer = () => {
  const [isSmallDevice] = useMediaQuery("(min-width: 800px)")

  return (
    <VStack display={"flex"} justifyContent="center" h={"250px"} width="100%" bgColor="white">
      <HStack w="full" mb={6}>
        <Divider variant="solid" orientation="horizontal" size="md" borderWidth="1px" borderColor="blackAlpha.200" />
      </HStack>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box display="flex" flexDirection={isSmallDevice ? "row" : "column"} width="100%" justifyContent="center">
          <HStack mr={4}>
            <GrLocation />
            <Text fontFamily={inter400.style.fontFamily}>Storgata 14, 2815 Gjøvik</Text>
          </HStack>
          <HStack mr={4}>
            <FaPhoneAlt />
            <Text fontFamily={inter400.style.fontFamily}>482 09 030</Text>
          </HStack>
          <HStack mr={4}>
            <FaEnvelope />
            <Text fontFamily={inter400.style.fontFamily}>kirsten@gjoviksko.no</Text>
          </HStack>
        </Box>
      </Box>
      <HStack>
        <Button
          size={"sm"}
          variant="ghost"
          leftIcon={<FaFacebook />}
          fontFamily={inter400.style.fontFamily}
          onClick={() => window.open("https://www.facebook.com/Gjovik.Skofabrik", "_blank")}
        >
          Facebook
        </Button>
        <Button
          variant="ghost"
          size={"sm"}
          fontFamily={inter400.style.fontFamily}
          leftIcon={<FaInstagram />}
          onClick={() => window.open("https://www.instagram.com/gjovikskofabrik/", "_blank")}
        >
          Instagram
        </Button>
      </HStack>
      <Text fontFamily={inter400.style.fontFamily} fontSize={12} color="gray.600">
        &copy; 2023 - made by @skogli20{" "}
      </Text>
    </VStack>
  )
}
export default Footer
