import { Icon } from "@iconify/react"
import React, { type FC } from "react"

import type { IconGeneratorPropsType } from "."

export const iconGenerator: FC<IconGeneratorPropsType> = ({ name: icon }) => {
  const icons: { [key: string]: JSX.Element } = {
    cross: <Icon icon="system-uicons:cross-circle" className="text-3xl" />,
    tick: <Icon icon="teenyicons:tick-circle-outline" className="text-3xl" />,
    loading: <Icon icon="line-md:loading-loop" className="text-3xl" />
  }

  return icons[icon] || null
}
