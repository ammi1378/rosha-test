import "../styles/theme.css";
import type { AppProps } from "next/app";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="/js/a/navigation.min.js"
        defer
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <Script
        src="/js/a/main.js"
        defer
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
