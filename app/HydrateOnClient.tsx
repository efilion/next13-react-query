'use client';

import { DehydratedState, Hydrate } from "@tanstack/react-query";
import React from "react";

export default function HydrateOnClient({dehydratedState, children}: {dehydratedState: DehydratedState, children: React.ReactNode}) {
    return <Hydrate state={dehydratedState}>{children}</Hydrate>;
}