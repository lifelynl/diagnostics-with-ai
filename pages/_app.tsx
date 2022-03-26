
import type { AppProps } from 'next/app'
import { BackgroundAnimation } from '../domain/core/BackgroundAnimation/BackgroundAnimation'
import './global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <div style={{paddingLeft: 8, paddingRight: 8, height: '100vh'}}>
    <BackgroundAnimation />
    <Component {...pageProps} /></div>
}

export default MyApp
