import axios from "axios"

import { BACKEND_URI } from "."

export const getApi = async (query: queryType, resource: string) => {
  try {
    return (
      await axios.get<resposeType>(
        `${BACKEND_URI()}/${resource}?url=${query.url}`
      )
    ).data
  } catch (e: any) {
    console.log(e)
  }
}
