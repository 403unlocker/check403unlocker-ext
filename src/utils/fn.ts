type Params = {
  currentAddress: string
  hasHttps?: boolean
  hasWww?: boolean
}

export const tabAddressToAddress = ({
  currentAddress,
  hasHttps = false,
  hasWww = false
}: Params) => {
  if (currentAddress.startsWith("https://") && !hasHttps) {
    currentAddress = currentAddress.slice(8)
  }

  if (currentAddress.startsWith("www.") && !hasWww) {
    currentAddress = currentAddress.slice(4)
  }

  const slashIndex = currentAddress.indexOf("/")
  if (slashIndex !== -1) {
    currentAddress = currentAddress.slice(0, slashIndex)
  }

  return currentAddress
}
