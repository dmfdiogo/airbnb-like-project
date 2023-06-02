import Header from "@components/layout/Header"

import "@utils/globals.css"
import { Nunito } from "next/font/google"

const font = Nunito({ subsets: ["latin"] })

import { config, library } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import * as AppIcons from "@utils/icons"
config.autoAddCss = false
library.add(AppIcons)

import type { AppProps } from "next/app"

export const metadata = {
  title: "Hostshare",
  description: "Hostshare Engineering Project",
}

const AirbnbLikeApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div lang="en">
      <div className={font.className}>
        <Header />
        <Component {...pageProps} />
      </div>
    </div>
  )
}
export default AirbnbLikeApp
