import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <div style={{paddingLeft: 8, paddingRight: 8}}><Component {...pageProps} /></div>
}

export default MyApp
