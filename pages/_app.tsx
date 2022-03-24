
import type { AppProps } from 'next/app'
import './global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <div style={{paddingLeft: 8, paddingRight: 8}}><Component {...pageProps} /></div>
}

export default MyApp
