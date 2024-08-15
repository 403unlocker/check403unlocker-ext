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
      className="flex flex-col p-10 content-center bg-[#101010] text-white"
      style={{ width: "350px", height: "380px" }}>
      <QueryClientProviderWrapper>
        {URI && <ResourceService URI={URI} />}
      </QueryClientProviderWrapper>
      <div className="text-center py-3">
        <p>وقت تو با ارزشه، دور زدن تحریم رو بسپار به ابزارها</p>
      </div>
    </div>
  )
}

export default IndexPopup
