import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {Hydrate, QueryClient, QueryClientProvider} from "react-query";
import {ThemeProvider} from 'next-themes';
import { ReactQueryDevtools } from 'react-query/devtools';
import {SessionProvider} from 'next-auth/react';
import {CartProvider} from "@/components/cart/context/CartContext";
import {Layout} from "@/components/layout/layout";

export default function App({ Component, pageProps }: AppProps &  { err: Error})  {
  const queryClient = new QueryClient({
    defaultOptions: {
        
    }
  });
  return (
      <ThemeProvider>
              <SessionProvider session={pageProps.session}>

                  <QueryClientProvider client={queryClient}>
                      <Hydrate state={pageProps.dehydratedState}>
                          <CartProvider>
                                  <Component {...pageProps}  />

                              <ReactQueryDevtools initialIsOpen={true} />
                          </CartProvider>
                      </Hydrate>
                  </QueryClientProvider>

              </SessionProvider>

      </ThemeProvider>

  )
}
