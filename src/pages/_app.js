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
        dangerouslySetInnerHTML={{
          __html: `
            (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=103482760', 'ym');

            ym(103482760, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
          `
        }}
      />
      <noscript>
        <div>
          <img src="https://mc.yandex.ru/watch/103482760" style={{position:'absolute', left:'-9999px'}} alt="" />
        </div>
      </noscript>
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
