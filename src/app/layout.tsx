import Client from './Client';
import './globals.css';
import font from 'next/font/local';

const poppins = font({
  src: [
    {
      path: '../../public/SpaceGrotesk-VariableFont_wght.ttf',
      style: 'normal',
    },
  ],
  variable: '--font-space-grotesk',
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
      <body className={`${poppins.variable} font-space-grotesk`}>
        <Client> {children}</Client>
      </body>
    </html>
  );
}
