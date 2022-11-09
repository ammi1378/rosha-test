import "../styles/theme.css";
import type { AppProps } from "next/app";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="/js/a/navigation.min.js" defer strategy="afterInteractive" />
      <Script src="/js/a/main.js" defer strategy="afterInteractive" />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
