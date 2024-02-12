'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LinkObj {
    name: string;
    href: string;
}

type Props = {
    links: LinkObj[]
}

export default function NavLinks({links}: Props) {
  const pathname = usePathname();

  return (
    <div className="primary-navigation flex">
      {links.map((link, index) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className="uppercase text-white letter-spacing-2"
          >
            <p><span>{index > 9 ? index + 1 : `0${index + 1}`}</span>{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}