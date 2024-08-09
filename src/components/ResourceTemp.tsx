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
}

const ResourceTemp: FC<Props> = ({
  Label,
  IsPending,
  IsSuccess,
  ResouceURL,
  dns
}) => {
  const CopyDnsHandler = (dns) => {
    navigator.clipboard.writeText(dns)
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
    <div className="flex flex-row justify-between items-center">
      <span className="text-2xl text-[#2bd3bf] font-medium py-3 ">
        <a className="pr-2 cursor-pointer" href={ResouceURL}>
          {Label}:{" "}
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
            CopyDnsHandler(dns)
          }}
        />
      </div>
    </div>
  )
}

export default ResourceTemp
