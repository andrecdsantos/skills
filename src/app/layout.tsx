import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
//import { Roboto, Permanent_Marker } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer';
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
                <main className="flex-grow w-full py-4 sm:px-12 xl:px-16 text-center lg:text-start bg-gray-100 text-black">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
