import { Article } from "@/components/layout/Article";
import { PaginationLink } from "@/components/layout/PaginationLink";
import { SideworksList } from "@/components/projects/SideworksList";

export default function SideworksPage() {
  return (
    <Article page="sideworks" title="Sideworks">
      <SideworksList />
      <PaginationLink href="/certificates" />
    </Article>
  );
}
