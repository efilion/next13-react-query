import Content from "./Content";
import fetchTest from "./fetchTest";

export default async function RootPage() {
  const initialData = await fetchTest();

  return <Content initialData={initialData} />
}