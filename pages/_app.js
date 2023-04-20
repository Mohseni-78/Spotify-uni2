import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { Toaster } from 'react-hot-toast'
import { RecoilRoot } from 'recoil'


export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
      </SessionProvider>
      <Toaster/>
    </RecoilRoot>
)
}
