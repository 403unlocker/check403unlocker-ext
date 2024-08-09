import React, { useEffect, type FC } from "react"

import { useServices } from "~apis"

import ResourceTemp from "./resourceTemp"

type Props = {
  URI: string
}

type ServiceType = {
  label: string
  address: string
  srcName: string
  dns: string
}[]

export const ResourceService: FC<Props> = ({ URI }) => {
  const { mutateAsync, data, isPending } = useServices()

  useEffect(() => {
    console.log(URI)
    if (URL) mutateAsync({ url: URI })
  }, [])

  const services: ServiceType = [
    {
      label: "shecan.ir",
      address: "https://shecan.ir",
      srcName: "shecan",
      dns: "178.22.122.100 – 185.51.200.2"
    },
    {
      label: "403.online",
      address: "https://403.online",
      srcName: "anti403",
      dns: "10.202.10.202 – 10.202.10.102"
    },
    {
      label: "begzar.ir",
      address: "https://begzar.ir",
      srcName: "begzar",
      dns: "185.55.226.26 – 185.55.225.25"
    },
    {
      label: "darzg.ir",
      address: "https://darzg.ir",
      srcName: "darzgir",
      dns: "37.27.41.228"
    }
  ]

  return (
    URI && (
      <div>
        <span className="text-2xl text-[#2bd3bf] font-medium py-3">
          <div>
            {services.map(({ label, address, srcName, dns }, index) => (
              <ResourceTemp
                key={index}
                Label={label}
                IsPending={isPending}
                ResouceURL={address}
                IsSuccess={data?.services[srcName]}
                dns={dns}
              />
            ))}
          </div>
        </span>
      </div>
    )
  )
}
