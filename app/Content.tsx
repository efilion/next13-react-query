"use client";

import { useQuery } from "@tanstack/react-query";
import React from "react";
import fetchTest from "./fetchTest";

export default function Content({name, children}: {name: string, children: React.ReactNode}) {

  const { data, isLoading, isError } = useQuery<string>(['test'], fetchTest);

  if(isLoading) {
    return <div>Loading...</div>
  };

  if(isError) {
    return <div>Error</div>    
  }
  
  return <>
    <div>{data}</div>
    <div>Hello, {name}!</div> 
    <div>{children}</div>
  </>
}