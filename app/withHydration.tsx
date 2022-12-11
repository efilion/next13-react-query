import { dehydrate, Query, QueryFunction, QueryKey } from "@tanstack/query-core";
import React from "react";
import getQueryClient from "./getQueryClient";
import HydrateOnClient from "./HydrateOnClient";

function withHydration<P>(WrappedComponent: React.ComponentType<P>) {
    return async(prefetch: {key: QueryKey, func: QueryFunction}[]) => {
        const queryClient = getQueryClient();
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