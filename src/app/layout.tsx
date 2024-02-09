import type { Metadata } from "next";

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
    <html lang="en">
      <body>
        
      </body>
    </html>
  );
}
