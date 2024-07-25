import { Icon } from "@iconify/react"
import React, { type FC } from "react"

type Props = {
  name: "tick" | "loading" | "cross"
}

export const IconGenerator: FC<Props> = ({ name: icon }) => {
  const icons: { [key: string]: JSX.Element } = {
    cross: <Icon icon="system-uicons:cross-circle" className="text-3xl" />,
    tick: <Icon icon="teenyicons:tick-circle-outline" className="text-2xl" />,
    loading: <Icon icon="line-md:loading-loop" className="text-2xl" />
  }

  return icons[icon] || null
}
