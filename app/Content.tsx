"use client";

import { useQuery } from "@tanstack/react-query";
import fetchTest from "./fetchTest";

export default function Content({initialData}: {initialData: string}) {

  const { data, isLoading, isError } = useQuery<string>({
    queryKey: ['test'],
    queryFn: fetchTest,
    initialData
  });

  if(isLoading) {
    return  <div>Loading...</div>
  };

  if(isError) {
    return <div>Error</div>
  }
  
  return <div>{data}</div>
}
