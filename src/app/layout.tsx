import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
//import { Roboto, Permanent_Marker } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import backgroundImg from '@/app/assets/background-image-white.jpg'

const mainFontFamily = Roboto({
    subsets: ['latin'],
    weight: ['300', '500', '700', '900'],
});

/* 
export const permanentMarker = Permanent_Marker({
    weight: ['400'],
    subsets: ['latin'],
});
 */

export const metadata: Metadata = {
    title: 'skills',
    description: 'Projeto teste para demonstração do aprendizado',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <body
                className={`min-h-screen flex flex-col ${mainFontFamily.className}`}
            >
                <Header />
                <main className="flex-grow w-full py-4 sm:px-12 xl:px-16 text-center lg:text-start relative text-black">
                    {children}
                    <Image 
                        src={backgroundImg} 
                        alt="imagem de fundo"
                        className='absolute -z-10 top-0 left-0 h-full'
                    />
                </main>
                <Footer />
            </body>
        </html>
    );
}
