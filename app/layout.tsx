import type { Metadata } from "next";
import { Roboto_Flex  } from "next/font/google";
import "./globals.scss";
import { Header } from "@/components/layout/Header";
import StoreProvider from "@/components/StoreProvider/StoreProvider";
import { ReactNode } from "react";

//загружаем шрифт сначала, чтобы использовать через свою переменную
const robotoFlex = Roboto_Flex ({ 
    subsets: ["latin", "cyrillic"],
    display: "swap",
    variable: '--font-roboto-flex',
});

export const metadata: Metadata = {
    metadataBase: new URL("https://my-next-app-omega.vercel.app"),
    title: {
        default: "My App",           // заголовок по умолчанию
        template: "%s | My App",     // шаблон: "О нас | My App"
    },
    description: "Современное приложение на Next.js",
    keywords: ["nextjs", "react", "typescript"],
    authors: [{ name: "My Team" }],
    openGraph: { // Facebook, LinkedIn, Telegram, Viber, WhatsApp
        title: "My App",
        description: "Современное приложение на Next.js",
        url: "https://my-next-app-omega.vercel.app",
        siteName: "My App",
        images: [
        {
            url: "/og-image.png",//папка public
            width: 1200,
            height: 630,
            alt: "My App Preview",
        },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "My App",
        description: "Современное приложение на Next.js",
        images: ["/og-image.png"],
    },
    robots: {
        index: true,      // разрешить индексацию
        follow: true,     // разрешить следовать по ссылкам
    },
    icons: {
        icon: "/icons/favicon.ico",
        apple: "/apple-icon.png",
    },
    manifest: "/manifest.json",  // для PWA //папка public
};

//Default export с function declaration (стандарт Next.js)
export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="ru">
            <body className={robotoFlex.className}>
                <StoreProvider>
                    <Header />
                    <main>
                        {children}
                    </main>
                    {/* <Footer /> */}
                </StoreProvider>
            </body>
        </html>
    );
}