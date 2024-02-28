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


export default function BackgroundImage({
  alt, mobile, tablet, desktop
}: BackgroundImageProps) {

  const isMobile = useMediaQuery(`(max-width: 767.98px)`);
  const isTablet = useMediaQuery(`(max-width: 767.98px)`);



  return (
    <>
      {(!isMobile || isMobile === undefined) && (
        <Image
          src={desktop}
          // placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          alt={alt}
          className="home-background__mobile"
        />
      )}
      {(isMobile || isMobile === undefined) && (
        <Image
          src={mobile}
          // placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          alt={alt}
          className="home-background__mobile"
        />
      )}
      {tablet && (isMobile || isMobile === undefined) && (
        <Image
          src={tablet}
          // placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          alt={alt}
          className="home-background__mobile"
        />
      )}
    </>
  );
}

// Thanks to Dom Webber on Medium for the inspiration!
// https://medium.com/@dom.webber/nextjs-13-tailwindcss-responsive-background-image-eb8ead82ab4e