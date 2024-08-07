export const tabAddressToAddress = (tab) => {
  try {
    const url = new URL(tab)
    const baseUrl = `${url.hostname}${url.port ? `:${url.port}` : ""}`
    return baseUrl
  } catch (e) {
    console.error("Invalid URL:", tab)
    return null
  }
}
