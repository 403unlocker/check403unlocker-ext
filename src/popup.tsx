import { useEffect, useState } from "react"

import { QueryClientProviderWrapper } from "~configs"

import "./styles/index.css"
import "toastify-js/src/toastify.css"

import { Resource } from "~components/Resource"
import { ResourceService } from "~components/ResourceService"
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
      className="flex flex-col p-4 content-center bg-[#161616] text-white rounded-xl shadow-lg"
      style={{ width: "320px", height: "360px", fontFamily: 'Vazirmatn, Tahoma, Arial', fontSize: "14px" }}>
      <QueryClientProviderWrapper>
        {URI && <ResourceService URI={URI} />}
      </QueryClientProviderWrapper>
      <div className="text-center py-2 mt-2 text-xs opacity-80">
        <p>وقت تو با ارزشه، دور زدن تحریم رو بسپار به ابزارها</p>
      </div>
    </div>
  )
}

export default IndexPopup
