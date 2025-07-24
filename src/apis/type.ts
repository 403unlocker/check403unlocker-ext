type resposeType = {
  IsSuccess: boolean
}

type queryType = {
  url: string
}

type serviceResposeType = {
  services: {
    shecan: boolean
    anti403: boolean
    begzar: boolean
    radar?: boolean
    electro?: boolean
    shelter?: boolean
    beshkan?: boolean
    pishgaman?: boolean
    shatel?: boolean
    level3?: boolean
    cloudflare?: boolean
    google?: boolean
    yandex?: boolean
  }
}
