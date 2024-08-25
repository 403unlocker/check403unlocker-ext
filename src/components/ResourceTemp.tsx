import { Icon } from "@iconify/react"
import React, { type FC } from "react"
import Toastify from "toastify-js"

import { IconGenerator } from "./IconGenerator"

type Props = {
  Label: string
  IsPending: boolean
  IsSuccess: boolean
  ResouceURL: string
  dns: string
  doh?: string
}

const ResourceTemp: FC<Props> = ({
  Label,
  IsPending,
  IsSuccess,
  ResouceURL,
  dns,
  doh
}) => {
  const CopyHandler = (value) => {
    navigator.clipboard.writeText(value)
    Toastify({
      text: "کپی شد",
      duration: 3000,
      style: {
        background: "#2bd3bf",
        color: "#000"
      }
    }).showToast()
  }

  return (
    <div
      className={`flex flex-row justify-between items-center ${IsPending ? "text-[#2bd3bf]" : IsSuccess ? "text-[#2bd3bf]" : "text-[#FF073A]"}`}>
      <span className={`text-2xl font-medium py-3 `}>
        <a className="pr-2 cursor-pointer" href={ResouceURL}>
          {Label}
        </a>
      </span>
      <div className="flex flex-row justify-between items-center">
        <IconGenerator
          icon={IsPending ? "loading" : IsSuccess ? "tick" : "cross"}
        />
        <Icon
          icon="hugeicons:copy-link"
          className="text-2xl cursor-pointer"
          onClick={() => {
            CopyHandler(dns)
          }}
        />
        <Icon
          icon="grommet-icons:connect"
          className={`text-2xl ${doh == null ? "cursor-default text-gray-500" : "cursor-pointer"}`}
          onClick={() => {
            if (doh) {
              CopyHandler(doh)
              chrome.tabs.create({ url: "chrome://settings/security" })
            }
          }}
        />
      </div>
    </div>
  )
}

export default ResourceTemp
