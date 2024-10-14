import {
   createApi,
   fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
   reducerPath: 'api',
   baseQuery: fetchBaseQuery({
      baseUrl: '',
   }), // Replace with actual API URL
   endpoints: builder => ({
      getCountries: builder.query({
         query: () =>
            'https://countriesnow.space/api/v0.1/countries', // Assuming endpoint is /countries
      }),
   }),
});

// Export hooks for usage in functional components
export const { useGetCountriesQuery } = apiSlice;
