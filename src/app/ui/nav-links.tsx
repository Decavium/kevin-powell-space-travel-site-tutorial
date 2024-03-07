'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LinkObj {
  name: string;
  href: string;
}

type Props = {
  links: LinkObj[]
  navOpen: boolean;
}

export default function NavLinks({ links, navOpen }: Props) {
  const pathname = usePathname();

  const isActive = (href: string) => pathname == href;

  return (
    <div id="primary-navigation" className={`${navOpen && "nav-open"} primary-navigation underline-indicators flex`}>
      {links.map((link, index) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`uppercase text-white letter-spacing-2 ${isActive(link.href) ? "active" : ""}`}
          >
            <p><span>{index > 9 ? index : `0${index}`}</span>{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}