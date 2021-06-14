import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const reposApi = createApi({
  reducerPath: 'queryRepos',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/users/' }),
  endpoints: (builder) => ({
    getReposByName: builder.query<any, string>({
      query: name => `${name}/repos`
    })
  })
})

export const { useGetReposByNameQuery } = reposApi;
