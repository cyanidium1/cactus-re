// "use client";
import ZustandProvider from "@/zustand/store/ZustandProvider";
import "../app/globals.css";
import "../components/TopImage.css";
import Script from "next/script";

// import '../components/loader.css'

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-0P0PSTJXSX"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-0P0PSTJXSX');
        `}
      </Script>
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          <ZustandProvider>
            <Component {...pageProps} />
          </ZustandProvider>
        </NextThemesProvider>
      </NextUIProvider>
    </>
  );
}

export default MyApp;
