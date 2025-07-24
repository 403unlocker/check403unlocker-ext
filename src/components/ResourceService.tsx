import React, { useEffect, useState, type FC } from "react"

import { useServices } from "~apis"
import ResourceTemp from "./resourceTemp"

// حالت demo: داده تستی برای زمانی که سرور قطع است
const DEMO_DATA = {
  services: {
    shecan: true,
    anti403: false,
    begzar: undefined,
    radar: true,
    electro: false,
    shelter: undefined,
    beshkan: true,
    pishgaman: false,
    shatel: undefined,
    level3: undefined,
    cloudflare: true,
    google: false,
    yandex: undefined
  }
}

const IS_DEMO = false // اگر true باشد، داده تستی استفاده می‌شود

type Props = {
  URI: string
}

type ServiceType = {
  label: string
  address: string
  srcName: string
  dns: string
  doh?: string
  dot?: string
  ipv6?: string
}[]

export const ResourceService: FC<Props> = ({ URI }) => {
  const { mutateAsync, data, isPending } = useServices()
  const [demoData, setDemoData] = useState<any>(null)

  useEffect(() => {
    if (IS_DEMO) {
      setDemoData(DEMO_DATA)
    } else if (URI) {
      mutateAsync({ url: URI })
    }
  }, [URI])

  const services: ServiceType = [
    // ... (همان آرایه قبلی سرویس‌ها بدون تغییر)
    { label: "شکن (Shecan)", address: "https://shecan.ir", srcName: "shecan", dns: "178.22.122.100 – 185.51.200.2", doh: "https://free.shecan.ir/dns-query", dot: "free.shecan.ir" },
    { label: "۴۰۳ آنلاین (403.online)", address: "https://403.online", srcName: "anti403", dns: "10.202.10.202 – 10.202.10.102", doh: "https://dns.403.online/dns-query", dot: "dns.403.online" },
    { label: "بگذر (Begzar)", address: "https://begzar.ir", srcName: "begzar", dns: "185.55.226.26 – 185.55.225.25" },
    { label: "رادار (Radar)", address: "https://radar.game", srcName: "radar", dns: "10.202.10.10 – 10.202.10.11" },
    { label: "الکترو (Electro)", address: "", srcName: "electro", dns: "78.157.42.100 – 78.157.42.101" },
    { label: "شلتر (Shelter)", address: "", srcName: "shelter", dns: "94.103.125.157 – 94.103.125.158" },
    { label: "بشکن (Beshkan)", address: "https://beshkanapp.ir", srcName: "beshkan", dns: "181.41.194.177 – 181.41.194.186", dot: "free.beshkanapp.ir" },
    { label: "پیشگامان (Pishgaman)", address: "", srcName: "pishgaman", dns: "5.202.100.100 – 5.202.100.101" },
    { label: "شاتل (Shatel)", address: "https://shatel.ir", srcName: "shatel", dns: "85.15.1.14 – 85.15.1.15" },
    { label: "Level3", address: "", srcName: "level3", dns: "209.244.0.3 – 209.244.0.4" },
    { label: "کلودفلر (Cloudflare)", address: "https://cloudflare.com", srcName: "cloudflare", dns: "1.1.1.1 – 1.0.0.1", ipv6: "2606:4700:4700::1111 – 2606:4700:4700::1001", doh: "https://cloudflare-dns.com/dns-query", dot: "cloudflare-dns.com" },
    { label: "گوگل (Google)", address: "https://dns.google", srcName: "google", dns: "8.8.8.8 – 4.2.2.4", ipv6: "2001:4860:4860::8888 – 2001:4860:4860::8844", doh: "https://dns.google/dns-query", dot: "dns.google" },
    { label: "یاندکس (Yandex RU)", address: "https://dns.yandex.com", srcName: "yandex", dns: "77.88.8.1 – 77.88.8.8" }
  ]

  // داده نهایی برای رندر
  const finalData = IS_DEMO ? demoData : data

  if (!URI && !IS_DEMO) return null

  if (isPending && !IS_DEMO) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[200px]">
        <span className="text-[#2bd3bf] text-lg font-medium">در حال دریافت اطلاعات سرویس‌ها...</span>
      </div>
    )
  }

  if (!finalData || !finalData.services) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[200px]">
        <span className="text-[#FF073A] text-lg font-medium">خطا در دریافت اطلاعات سرویس‌ها یا هیچ داده‌ای موجود نیست.</span>
      </div>
    )
  }

  return (
    <div className="w-full bg-[#181818] rounded-xl p-2" style={{maxHeight: "330px", overflowY: "auto"}}>
      <span className="text-xl font-medium py-2 block text-center">وضعیت سرویس‌های DNS</span>
      <div className="flex flex-col gap-2">
        {services.map(({ label, address, srcName, dns, doh, dot, ipv6 }, index) => {
          const status = finalData.services.hasOwnProperty(srcName)
            ? finalData.services[srcName]
            : undefined
          return (
            <div key={index} className="bg-[#222] rounded-lg p-2 shadow flex flex-col border border-[#2bd3bf]">
              <ResourceTemp
                IsSuccess={status === true}
                IsPending={status === undefined}
                Label={label}
                ResouceURL={address}
                dns={dns}
                doh={doh}
                dot={dot}
                ipv6={ipv6}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
