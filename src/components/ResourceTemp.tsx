import React, { type FC } from "react"

import { IconGenerator } from "./IconGenerator"

type Props = {
  Label: string
  IsPending: boolean
  IsSuccess: boolean
}

const ResourceTemp: FC<Props> = ({ Label, IsPending, IsSuccess }) => {
  return (
    <div>
      <span className="text-2xl text-[#2bd3bf] font-medium py-3 flex flex-row">
        <span className="pr-2">{Label}: </span>
        <IconGenerator
          name={IsPending ? "loading" : IsSuccess ? "tick" : "cross"}
        />
      </span>
    </div>
  )
}

export default ResourceTemp
