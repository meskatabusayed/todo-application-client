import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const baseApi = createApi({
    reducerPath : "baseApi", // "reducerPath" ai name ta kiser vitti te hobe
    baseQuery : fetchBaseQuery({baseUrl : 'http://localhost:5000'}),
    tagTypes : ["todo"],
    endpoints : (builder) => ({
        getTodos : builder.query({
            query: (priority) => ({
                url : "/tasks",
                method : "GET",
                params : {priority},
            }),
            providesTags : ["todo"],
        }),
        addTodo : builder.mutation({
            query: (data) => {
                console.log("inside mutation" , data);
                return{
                    url : "/task",
                method : "POST",
                body : data,
                }
            },
            invalidatesTags : ["todo"],
        }),
        
    }),
})

export const {useGetTodosQuery , useAddTodoMutation} = baseApi;