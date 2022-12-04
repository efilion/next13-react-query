import { dehydrate, QueryClient, Query, QueryFunction, QueryKey } from "@tanstack/query-core";
import React from "react";
import HydrateOnClient from "./HydrateOnClient";

function withHydration<P>(WrappedComponent: React.ComponentType<P>) {
    return async (queryClient?: QueryClient, prefetch?: {key: QueryKey, func: QueryFunction}[]) => {
        if(!queryClient) {
            queryClient = new QueryClient();
        }

        await Promise.all(prefetch.map(query => queryClient.prefetchQuery(query.key, query.func)));

        const prefetchKeys = prefetch.map(query => query.key);
        const dehydratedState = dehydrate(queryClient, {
            dehydrateMutations: false,
            shouldDehydrateQuery: (query: Query) => prefetchKeys.includes(query.queryKey)
        });

        return (props: P) => (
            <HydrateOnClient dehydratedState={dehydratedState}>
                <WrappedComponent {...props} />
            </HydrateOnClient>
        );
    };
} 

export default withHydration;