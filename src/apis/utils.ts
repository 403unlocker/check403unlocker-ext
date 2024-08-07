import { useMutation } from "@tanstack/react-query"

import { getApi } from "~apis"

export const useGetBegzar = () => {
  return useMutation({
    mutationKey: ["getBegzar"],
    mutationFn: (query: queryType) => getApi(query, "begzar")
  })
}

export const useGetShecan = () => {
  return useMutation({
    mutationKey: ["getShecan"],
    mutationFn: (query: queryType) => getApi(query, "shecan")
  })
}

export const useGetAnti403 = () => {
  return useMutation({
    mutationKey: ["getAnti403"],
    mutationFn: (query: queryType) => getApi(query, "anti403")
  })
}

export const useVanillaApp = () => {
  return useMutation({
    mutationKey: ["getVanillaApp"],
    mutationFn: (query: queryType) => getApi(query, "vanillapp")
  })
}

export const useServices = () => {
  return useMutation({
    mutationKey: ["getServices"],
    mutationFn: (query: queryType) => getApi(query, "services")
  })
}
