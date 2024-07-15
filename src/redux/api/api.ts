import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const baseApi = createApi({
    reducerPath : "baseApi", // "reducerPath" ai name ta kiser vitti te hobe
    baseQuery : fetchBaseQuery({baseUrl : 'http://localhost:5000'}),
    endpoints : (builder) => ({
        getTodos : builder.query({
            query: () => ({
                url : "/tasks",
                method : "GET",
            })
        })
    }),
})

export const {useGetTodosQuery} = baseApi;