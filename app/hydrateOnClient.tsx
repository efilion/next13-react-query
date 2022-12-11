'use client'

import { Hydrate } from "@tanstack/react-query";

export function HydrateOnClient({dehydratedState, children}) {
    return <Hydrate state={dehydratedState}>{children}</Hydrate>
}