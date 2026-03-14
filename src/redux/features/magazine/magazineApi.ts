import { baseApi } from "@/redux/api/baseApi";

export const magazineApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({
        getMagazine : builder.query({
            query : ()=> "/api/magazines/",
            providesTags : ["Magazine"],
        }),
        deleteMagazine : builder.mutation({
            query : (id : string)=> ({
                url : `/api/magazines/${id}/`,
                method : "DELETE",
            }),
            invalidatesTags : ["Magazine"],
        })
    }),
     overrideExisting: true,
})

export const { useGetMagazineQuery, useDeleteMagazineMutation } = magazineApi