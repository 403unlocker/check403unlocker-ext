import { useEffect, useState } from "react"

import { QueryClientProviderWrapper } from "~configs"

import "./styles/index.css"

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
      className="py-5 flex justify-center bg-blue-950 text-white"
      style={{ width: "300px", height: "300px" }}>
      <QueryClientProviderWrapper>
        <div></div>
      </QueryClientProviderWrapper>
    </div>
  )
}

export default IndexPopup
