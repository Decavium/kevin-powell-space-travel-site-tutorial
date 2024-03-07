import Image from "next/image"
import LogoSVG from '/public/images/shared/logo.svg';

export default function Logo() {
    return (
        <>
            <Image
                src={LogoSVG}
                width={48}
                height={48}
                alt="The website logo. It shows a star in a circle."
                className="logo"
            />
        </>
    )
}