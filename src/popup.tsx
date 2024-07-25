import { useEffect, useState } from "react"

import { QueryClientProviderWrapper } from "~configs"

import "./styles/index.css"

import { useGetBegzar, useGetShecan } from "~apis"
import { Resource } from "~components/Resource"
import { tabAddressToAddress } from "~utils/fn"

function IndexPopup() {
  const [URI, setURI] = useState(null)

  useEffect(() => {
    const fetchTabInfo = async () => {
      return new Promise((resolve, reject) => {
        chrome.tabs.query(
          {
            active: true,
            currentWindow: true
          },
          function (tabs) {
            const tab = tabs[0]
            if (chrome.runtime.lastError) reject(chrome.runtime.lastError)
            else resolve(tab)
          }
        )
      })
    }

    fetchTabInfo()
      .then((tab) => {
        if (tab && typeof tab === "object" && "url" in tab)
          if (tab.url) setURI(tabAddressToAddress(tab.url))
      })
      .catch((error) => {
        console.error("Error fetching tab info:", error)
      })
  }, [chrome])

  return (
    <div
      className="flex flex-col p-10 content-center bg-[#101010] text-white"
      style={{ width: "350px", height: "350px" }}>
      <span className="text-2xl text-center py-3">{URI}</span>
      <QueryClientProviderWrapper>
        {URI && (
          <div className="flex content-center justify-center flex-col">
            <Resource label="Begzar.ir" mutator={useGetBegzar} URI={URI} />
            <Resource label="Shecan.ir" mutator={useGetShecan} URI={URI} />
            <Resource label="403.online" mutator={useGetShecan} URI={URI} />
            <Resource label="VanillaApp.ir" mutator={useGetShecan} URI={URI} />
          </div>
        )}
      </QueryClientProviderWrapper>
    </div>
  )
}

export default IndexPopup
