import { Icon } from "@iconify/react"
import React, { type FC } from "react"

type Props = {
  icon: "tick" | "loading" | "cross"
}

export const IconGenerator: FC<Props> = ({ icon }) => {
  const icons: { [key: string]: JSX.Element } = {
    cross: <Icon icon="mdi:cross-circle-outline" className="text-2xl" />,
    tick: <Icon icon="mdi:tick-circle-outline" className="text-2xl" />,
    loading: <Icon icon="line-md:loading-loop" className="text-2xl" />
  }

  return icons[icon] || null
}
