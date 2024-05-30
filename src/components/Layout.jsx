import Header from "./Header";
import Footer from "./Footer/Footer";
import Loader from "./Loader";
import Head from "next/head";
import ButtonUp from "./ButtonUp";

export const metadata = {};

export default function Layout({ children, isStyled = true, isRU, setIsRu }) {
  return (
    <div>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon.png"
          className="rounded-full bg-customGreen"
        />
        {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <title></title> */}
      </Head>
      {/* <Loader /> */}
      <Header isRU={isRU} setIsRu={setIsRu} />
      <main className={isStyled ? "max-w-[1120px] mx-auto p-2" : ""}>
        {children}
      </main>
      <ButtonUp />
      <Footer isRU={isRU} />
    </div>
  );
}
