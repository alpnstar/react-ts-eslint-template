



// export const categoriesApi = createApi({
//     reducerPath: 'categories',
//     baseQuery: fetchBaseQuery(({baseUrl: BASE_URL + '/categories'})),
//     endpoints: (builder) => ({
//         getCategoryById: builder.query({
//             query: (id) => id,
//         }),
//         getCategories: builder.query({
//             query: () => '',
//         }),
//         getCategoryProducts: builder.query({
//             query: (data) => buildUrl(
//                 data.id + '/products',
//                 clearParams(data.params, ['offset', 'limit'])
//             )
//         })
//     })
// })
// export const {useGetCategoryByIdQuery, useGetCategoriesQuery, useGetCategoryProductsQuery} = categoriesApi;
//
// //store
// export const store = configureStore({
//     reducer: {
//         user: userReducer,
//         [productsApi.reducerPath]: productsApi.reducer,
//         [categoriesApi.reducerPath]: categoriesApi.reducer
//     },
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware()
//             .concat(
//                 productsApi.middleware,
//                 categoriesApi.middleware
//             )
// })