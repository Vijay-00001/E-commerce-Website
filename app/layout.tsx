import type { Metadata } from 'next';
import '@/app/globals.css';
import DataProvider from '@/components/dataProvider/DataProvider';
import { Roboto, Poppins } from 'next/font/google';

const roboto = Roboto({
   subsets: ['latin'],
   weight: ['400', '700'],
});

const poppins = Poppins({
   subsets: ['latin'],
   weight: ['400', '700'],
});

export const metadata: Metadata = {
   title: 'Create Next App',
   description: 'Generated by create next app',
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body
            className={`${poppins.className} ${roboto.className} antialiased`}
         >
            <DataProvider>{children}</DataProvider>
         </body>
      </html>
   );
}
