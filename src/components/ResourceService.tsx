import React, { useEffect, type FC } from "react"

import { useServices } from "~apis"

import ResourceTemp from "./resourceTemp"

type Props = {
  URI: string
}

export const ResourceService: FC<Props> = ({ URI }) => {
  const { mutateAsync, data, isPending } = useServices()

  useEffect(() => {
    if (URL) mutateAsync({ url: URI })
  }, [])

  const services = ["shecan", "anti403", "begzar"]

  return (
    URI && (
      <div>
        <span className="text-2xl text-[#2bd3bf] font-medium py-3 flex flex-row">
          <div>
            {services.map((service, index) => (
              <ResourceTemp
                key={index}
                Label={service}
                IsPending={isPending}
                IsSuccess={data?.services[service]}
              />
            ))}
          </div>
        </span>
      </div>
    )
  )
}
