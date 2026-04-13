import { baseApi } from "@/redux/api/baseApi";

export const eventApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({
        getEvent : builder.query({
            query : ()=> "/api/events/",
            providesTags : ["Event"],
        }),
        deleteEvent : builder.mutation({
            query : (id : string)=> ({
                url : `/api/events/${id}/`,
                method : "DELETE",
            }),
            invalidatesTags : ["Event"],
        })
    }),
     overrideExisting: true,
})

export const { useGetEventQuery, useDeleteEventMutation } = eventApi