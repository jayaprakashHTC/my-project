import LayoutIndex from '@/layout';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
  <>
    <LayoutIndex>
        <Component {...pageProps} />
    </LayoutIndex>
  </>
  );
}
