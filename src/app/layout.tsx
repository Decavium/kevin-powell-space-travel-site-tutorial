import '@/app/ui/global.css';
import type { Metadata } from "next";
import { barlow, barlow_condensed, bellefair } from './ui/fonts';
import Nav from './ui/nav';

export const metadata: Metadata = {
  title: {
    template: '%s | Space Tourism Site',
    default: 'Space Tourism Site',
  },
  description: "A website made to practice CSS and NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlow.className} antialiased ${barlow_condensed.className} antialiased s${bellefair.className} antialiased`}>
      <body>
        <a className="skip-to-content" href="#main">Skip to content</a>
        <Nav />{children}</body>
    </html>
  );
}
