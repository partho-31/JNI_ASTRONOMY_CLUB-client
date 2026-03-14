import { baseApi } from "@/redux/api/baseApi";


export const userApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({
        getUser : builder.query({
            query : ()=> "/api/members/",
            providesTags : ["User"],
        }),
        deleteUser : builder.mutation({
            query : (id : string)=> ({
                url : `/api/members/${id}/`,
                method : "DELETE",
            }),
            invalidatesTags : ["User"],
        })
    }),
     overrideExisting: true,
})

export const { useGetUserQuery , useDeleteUserMutation } = userApi