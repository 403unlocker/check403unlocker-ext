import { useEffect, useState } from "react"

import { QueryClientProviderWrapper } from "~configs"

import "./styles/index.css"

import { Anti403 } from "~components"
import Begzar from "~components/Begzar"
import Shecan from "~components/Shecan"
import VanillaApp from "~components/VanillaApp"

function IndexPopup() {
  const [address, setAddress] = useState("")

  useEffect(
    () =>
      chrome.tabs.query(
        {
          active: true,
          currentWindow: true
        },
        function (tabs) {
          const tab = tabs[0]
          if (tab.url) {
            setAddress(tab.url)
          }
        }
      ),
    [chrome]
  )

  return (
    <div
      className="flex p-10 content-center bg-[#101010] text-white"
      style={{ width: "350px", height: "350px" }}>
      <QueryClientProviderWrapper>
        <div className="flex content-center justify-center flex-col">
          <Anti403 />
          <Shecan />
          <Begzar />
          <VanillaApp />
        </div>
      </QueryClientProviderWrapper>
    </div>
  )
}

export default IndexPopup
