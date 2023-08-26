// import '@/styles/globals.css'
import AppProps from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Theme
      accentColor="cyan"
      grayColor="gray"
      panelBackground="solid"
      scaling="100%"
      radius="full"
    >
      <Component {...pageProps} />
    </Theme>
  );
}
