import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
   reducerPath: 'api',
   baseQuery: fetchBaseQuery({
      baseUrl: '',
   }),
   endpoints: builder => ({
      getCountries: builder.query({
         query: () => 'https://countriesnow.space/api/v0.1/countries',
      }),
   }),
});

export const { useGetCountriesQuery } = apiSlice;
