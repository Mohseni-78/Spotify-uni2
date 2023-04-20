import '@/styles/globals.css'
import { Toaster } from 'react-hot-toast'
import { RecoilRoot } from 'recoil'


export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
      <Toaster/>
    </RecoilRoot>
)
}
