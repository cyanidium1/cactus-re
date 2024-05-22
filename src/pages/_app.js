// "use client";
import '../app/globals.css'
import '../components/TopImage.css'

// import '../components/loader.css'

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
    return (
        <NextUIProvider>
            <NextThemesProvider attribute="class" defaultTheme="dark">
                <Component {...pageProps} />
            </NextThemesProvider>
        </NextUIProvider>
    )
}

export default MyApp;