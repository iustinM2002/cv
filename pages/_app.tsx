import '@/styles/global.css'
import type { AppProps } from 'next/app'
import { Hydrate,QueryClient ,QueryClientProvider} from 'react-query';
import { LoginProvider } from 'contexts/loginContext';
import { RegisterProvider } from 'contexts/registerContext';

const client = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {
  
  return (<QueryClientProvider client={client}><Hydrate state={pageProps.dehydratedState}><RegisterProvider><LoginProvider><Component {...pageProps} /></LoginProvider></RegisterProvider></Hydrate></QueryClientProvider>)
}
