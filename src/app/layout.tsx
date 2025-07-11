import Client from './client';
import './globals.css';
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata = {
  title: 'Emmanuel Osayame',
  description:
    'Full-stack developer, Front-end developer, React.js, Next.js, Typescript, Javascript.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${dmSans.variable} font-dm-sans`}>
        <Client>{children}</Client>
      </body>
    </html>
  );
}
