import type { UseMutationResult } from "@tanstack/react-query"
import React, { useEffect, type FC } from "react"

import { IconGenerator } from "~components/IconGenerator"

type Props = {
  URI: string
  label: string
  mutator: () => UseMutationResult<resposeType, Error, queryType, unknown>
}

export const Resource: FC<Props> = ({ URI, label, mutator }) => {
  const { mutateAsync, data, isPending } = mutator()

  useEffect(() => {
    if (URL) mutateAsync({ url: URI })
  }, [])

  return (
    URI && (
      <div>
        <span className="text-2xl text-[#2bd3bf] font-medium py-3 flex flex-row">
          <span className="pr-2">{label}: </span>
          <IconGenerator
            name={isPending ? "loading" : data?.IsSuccess ? "tick" : "cross"}
          />
        </span>
      </div>
    )
  )
}
