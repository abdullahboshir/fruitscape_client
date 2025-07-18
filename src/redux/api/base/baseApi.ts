// Need to use the React-specific entry point to allow generating React hooks
import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from '@/lib/axios/axiosBaseQuery'
import { tagTypesList } from '@/redux/tag-taypes';


const baseURL: string =
  process.env.NODE_ENV === 'development'
    ? process.env.NEXT_PUBLIC_BACKEND_BASE_API_URL?? "http://localhost:5000/api/v1"
    : process.env.NEXT_PUBLIC_API_BASE_URL_LIVE  ?? "http://localhost:5000/api/v1";



export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({ baseUrl: baseURL }),
  endpoints: () => ({ }),
  tagTypes: tagTypesList
})