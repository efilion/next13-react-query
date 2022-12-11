import HydratedContent from './hydratedContent';

export default function RootPage() {

  // @ts-expect-error Server Component
  return <HydratedContent />
}