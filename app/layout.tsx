import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["100", "200", "400", "700", '900'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jg.png" sizes="any" />
      </head>
      <body className={`${montserrat.className}`}>
        {children}
        <CustomCursor />
      </body>
    </html>
  );
}


// Change this data with your own 🤭
export const metadata: Metadata = {
  title: {
    default: 'Jatin Gola - Portfolio',
    template: '%s - Jatin Gola',
  },
  description:
    'A portfolio showcasing the work and skills of Jatin Gola, an AI enthusiast and Graphic Designer.',
  icons: {
    icon: './favicon.ico',
  },
  applicationName: 'Jatin Gola Portfolio',
  authors: [
    {
      name: 'Jatin Gola',
      url: 'https://www.linkedin.com/in/jatin-gola/',
    },
  ],
  generator: 'Next.js',
  referrer: 'origin',
  themeColor: '#0a0431ff',
  colorScheme: 'dark',
  viewport: 'width=device-width, initial-scale=1',
  creator: 'Jatin Gola',
  publisher: 'Jatin Gola',
};
