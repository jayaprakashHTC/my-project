import LayoutIndex from '@/layout';
import '@/styles/globals.css';
//import "tw-elements/dist/css/tw-elements.min.css";

export default function App({ Component, pageProps }) {
  return (
  <>
    <LayoutIndex>
        <Component {...pageProps} />
    </LayoutIndex>
  </>
  );
}
