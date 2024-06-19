// "use client";
import ZustandProvider from "@/zustand/store/ZustandProvider";
import "../app/globals.css";
import "../components/TopImage.css";

// import '../components/loader.css'

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
// import SetBodyWidth from "@/components/SetBodyWidth";

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <ZustandProvider>
          {/* <SetBodyWidth /> */}
          <Component {...pageProps} />
        </ZustandProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}

export default MyApp;
