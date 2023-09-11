import { IResource } from ".."
import { Carousel } from "react-responsive-carousel"
import Image from "next/image"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Box, useMediaQuery } from "@chakra-ui/react"

interface Props {
  images: IResource
}

export const ImageGallery = ({ images }: Props) => {
  const [isSmallDevice] = useMediaQuery("(min-width: 800px)")

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Carousel
        showThumbs={false}
        dynamicHeight
        width={isSmallDevice ? 800 : "100%"}
        showArrows
        swipeable
        axis="horizontal"
        showIndicators={false}
      >
        {images
          ? images.resources.map((p) => (
              <div key={p.asset_id}>
                <Image
                  src={p.secure_url}
                  alt="img"
                  height={p.height ?? "auto"}
                  width={p.width ?? "auto"}
                  loading="lazy"
                />
              </div>
            ))
          : []}
      </Carousel>
    </Box>
  )
}
export default ImageGallery
