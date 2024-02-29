'use client'

import { useMediaQuery } from "../lib/actions";
import Image, { StaticImageData } from "next/image";

// Tablet is an optional prop as it may not always be the case
// that you will have a tablet image.
interface BackgroundImageProps {
  alt: string;
  mobile: StaticImageData;
  tablet?: StaticImageData;
  desktop: StaticImageData;
}

// Thanks to Dom Webber on Medium for the inspiration!
// https://medium.com/@dom.webber/nextjs-13-tailwindcss-responsive-background-image-eb8ead82ab4e
export default function BackgroundImage({
  alt, mobile, tablet, desktop
}: BackgroundImageProps) {

  // 35rem if the default is 16px
  const isMobile = useMediaQuery(`(max-width: 560px)`);
  // 45rem
  const isTablet = useMediaQuery(`(max-width: 720px)`);

  return (
    <>
      {(isMobile || isMobile === undefined) && (
        <Background
          src={mobile}
          alt={alt}
        />
      )}
      {tablet && ((!isMobile && isTablet) || isMobile === undefined) && (
        <Background
          src={tablet}
          alt={alt}
        />
      )}
      {((!isMobile && !isTablet) || isMobile === undefined) && (
        <Background
          src={desktop}
          alt={alt}
        />
      )}
    </>
  );
}

interface BackgroundProps {
  alt: string;
  src: StaticImageData;
  className?: string;
}

export function Background({
  src, alt, className
}: BackgroundProps) {
  return (
    <>
      <Image
        src={src}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        alt={alt}
        className={`${className} background-image`}
      />
    </>
  )
}

