import axios from "axios"

import { BACKEND_URI } from "."

export const getApi = async (query: queryType, resource: string) => {
  try {
    console.log(`${BACKEND_URI()}/${resource}?url=${query.url}`)
    return (
      await axios.get<serviceResposeType>(
        `${BACKEND_URI()}/${resource}?url=${query.url}`
      )
    ).data
  } catch (e: any) {
    console.log(e)
  }
}
