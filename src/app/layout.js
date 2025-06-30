import Script from "next/script";

export const metadata = {
  title: {
    en: "Real Estate",
    ru: "Недвижимость",
  },
  description: {
    en: "Real estate listings",
    ru: "Объявления о недвижимости",
  },
  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      ru: "/ru",
    },
  },
};

export default function RootLayout({ children, params }) {
  // params.lang будет содержать текущий язык из URL
  const lang = params.lang === "ru" ? "ru" : "en";
  return (
    <html lang={lang}>
      <head>
        <title>{metadata.title[lang]}</title>
        <meta name="description" content={metadata.description[lang]} />
        <link rel="alternate" hrefLang="en" href="/en" />
        <link rel="alternate" hrefLang="ru" href="/ru" />
      </head>
      <body>
        {children}
        {/* <Script src="https://www.googletagmanager.com/gtag/js?id=G-0P0PSTJXSX" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-0P0PSTJXSX');
        `}
        </Script> */}
      </body>
    </html>
  );
}
