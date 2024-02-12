import '@/app/ui/global.css';
import type { Metadata } from "next";
import { barlow, barlow_condensed, bellefair } from './ui/fonts';

export const metadata: Metadata = {
  title: {
    template: '%s | Space Tourism Site',
    default: 'Space Tourism Site'
  },
  description: "A website made to practice CSS and NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlow.className} ${barlow_condensed.className} ${bellefair.className}`}>
      <body>{children}</body>
    </html>
  );
}
