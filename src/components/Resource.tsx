import type { UseMutationResult } from "@tanstack/react-query"
import React, { useEffect, type FC } from "react"

import ResourceTemp from "./resourceTemp"

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
      <ResourceTemp
        Label={label}
        IsPending={isPending}
        IsSuccess={data.IsSuccess}
      />
    )
  )
}
