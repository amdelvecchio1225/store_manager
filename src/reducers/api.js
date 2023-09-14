import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const managerApi = createApi({
    tagTypes:['products'],
    reducerPath: 'store_manager',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8081'}),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => 'api/products'
        }),
        getProductById: builder.query({
            query: (id) => 'api/purchases/'+id
        }),
        
    })
})