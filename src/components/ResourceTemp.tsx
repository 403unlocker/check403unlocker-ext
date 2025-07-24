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

const ResourceTemp: FC<Props & { dot?: string; ipv6?: string }> = ({
  Label,
  IsPending,
  IsSuccess,
  ResouceURL,
  dns,
  doh,
  dot,
  ipv6
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

  // تعیین رنگ و وضعیت
  let statusColor = "text-[#2bd3bf]";
  let statusText = "موفق";
  let iconType: "tick" | "loading" | "cross" = "tick";
  if (IsPending) {
    statusColor = "text-blue-400 animate-pulse";
    statusText = "در حال بررسی";
    iconType = "loading";
  } else if (!IsSuccess) {
    statusColor = "text-[#FF073A]";
    statusText = "عدم موفقیت";
    iconType = "cross";
  }

  return (
    <div className={`flex flex-col md:flex-row gap-2 md:gap-0 justify-between items-center rounded-lg px-3 py-2 bg-[#181818] shadow-sm border border-[#222] mb-2 ${statusColor}`}>
      <div className="flex flex-row items-center gap-2 w-full md:w-1/3">
        <IconGenerator icon={iconType} />
        <span className="text-base md:text-lg font-bold">
          <a className="pr-2 cursor-pointer hover:underline" href={ResouceURL} target="_blank" rel="noopener noreferrer">
            {Label}
          </a>
        </span>
        <span className="text-xs font-medium pl-2">[{statusText}]</span>
      </div>
      <div className="flex flex-col items-start text-xs md:text-sm w-full md:w-2/3">
        <div className="flex flex-row items-center gap-1">
          <b>DNS:</b>
          <span className="select-all">{dns}</span>
          <Icon icon="hugeicons:copy-link" className="text-base cursor-pointer" onClick={() => CopyHandler(dns)} />
        </div>
        {dot && (
          <div className="flex flex-row items-center gap-1">
            <b>DoT:</b>
            <span className="select-all">{dot}</span>
            <Icon icon="hugeicons:copy-link" className="text-base cursor-pointer" onClick={() => CopyHandler(dot)} />
          </div>
        )}
        {ipv6 && (
          <div className="flex flex-row items-center gap-1">
            <b>IPv6:</b>
            <span className="select-all">{ipv6}</span>
            <Icon icon="hugeicons:copy-link" className="text-base cursor-pointer" onClick={() => CopyHandler(ipv6)} />
          </div>
        )}
        {doh && (
          <div className="flex flex-row items-center gap-1">
            <b>DoH:</b>
            <span className="select-all">{doh}</span>
            <Icon icon="hugeicons:copy-link" className="text-base cursor-pointer" onClick={() => CopyHandler(doh)} />
            <Icon icon="grommet-icons:connect" className="text-base cursor-pointer" onClick={() => {
              CopyHandler(doh);
              chrome.tabs.create({ url: "chrome://settings/security" });
            }} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ResourceTemp
