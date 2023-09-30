import { baseApi } from "./baseApi";

const AUTH_URL = "/auth";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: ["user"],
    }),
    // userLogOut:build.mutation({
    //   query:()
    // })
  }),
});

export const { useUserLoginMutation } = authApi;
