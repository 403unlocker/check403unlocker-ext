import { Icon } from "@iconify/react"
import React, { type FC } from "react"

type Props = {
  icon: "tick" | "loading" | "cross"
  size?: number
}

export const IconGenerator: FC<Props> = ({ icon, size = 24 }) => {
  const iconClass = `inline align-middle`;
  const iconSizeClass = `text-[${size}px]`;
  const icons: { [key: string]: JSX.Element } = {
    cross: <Icon icon="mdi:cross-circle-outline" className={`${iconSizeClass} ${iconClass}`} />, // رنگ توسط parent تعیین می‌شود
    tick: <Icon icon="mdi:tick-circle-outline" className={`${iconSizeClass} ${iconClass}`} />,
    loading: <Icon icon="line-md:loading-loop" className={`${iconSizeClass} ${iconClass}`} />
  }

  return icons[icon] || null
}
