import { QueryClient } from "@tanstack/query-core";
import Content from "./Content";
import fetchTest from "./fetchTest";
import withHydration from "./withHydration";

export default async function RootPage() {

  const queryClient = new QueryClient();
  
  const HydratedContent = await withHydration(Content)
    (queryClient,
      [
        { key: ["test"], func: fetchTest },
      ]
    );

  return <HydratedContent name="Odo">Hello, World!</HydratedContent>;
}