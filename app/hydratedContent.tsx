import { getQueryClient } from "./getQueryClient";
import { HydrateOnClient } from "./hydrateOnClient";
import fetchTest from "./fetchTest";
import { dehydrate } from "@tanstack/query-core";
import Content from "./Content";

export default async function HydratedContent() {
    const queryClient = getQueryClient();
    await queryClient.prefetchQuery(['test'], fetchTest);
    const dehydratedState = dehydrate(queryClient, {
        dehydrateMutations: false,
        shouldDehydrateQuery: query => true // export matchQuery or extend dehydrate to single out queries by queryKey
    });

    return <HydrateOnClient dehydratedState={dehydratedState}><Content /></HydrateOnClient>
}