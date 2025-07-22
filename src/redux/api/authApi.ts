import { tagTypes } from "../tag-taypes";
import { baseApi } from "./base/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation({
            query: (data) => ({
                url: '/auth/login',
                method: 'POST',
                contentType: 'multipart/form-data',
                data
            })
        })
    }),
    // invalidatesTags: [tagTypes.auth]
});


export const {
    useLoginMutation
} = authApi;