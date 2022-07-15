import Image from 'next/image'
import styled from '@emotion/styled'

export interface CareersPageImageProps {
  src: string
  alt?: string
  quality?: string | number
}

export const CareersPageImage = ({
  src,
  alt,
  quality
}: CareersPageImageProps) => {
  const CareersPageImageWrapper = styled.div`
    position: relative;
    height: 600px;
  `
  return (
    <CareersPageImageWrapper>
      <Image
        src={src}
        alt={alt}
        quality={quality}
        layout="fill"
        objectFit="cover"
      />
    </CareersPageImageWrapper>
  )
}
