import Content from "./Content";
import fetchTest from "./fetchTest";
import withHydration from "./withHydration";

export default async function RootPage() {

  const HydratedContent = await withHydration(Content)
    (
      [
        { key: ["test"], func: fetchTest },
      ]
    );

  return <HydratedContent name="Odo">Hello, World!</HydratedContent>;
}