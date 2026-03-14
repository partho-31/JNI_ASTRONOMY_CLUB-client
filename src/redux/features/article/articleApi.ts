import { baseApi } from "@/redux/api/baseApi";

export const articleApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({
        getArticle : builder.query({
            query : ()=> "/api/articles/",
            providesTags : ["Article"],
        }),
        deleteArticle : builder.mutation({
            query : (id : string)=> ({
                url : `/api/articles/${id}/`,
                method : "DELETE",
            }),
            invalidatesTags : ["Article"],
        })
    }),
     overrideExisting: true,
})

export const { useGetArticleQuery, useDeleteArticleMutation } = articleApi