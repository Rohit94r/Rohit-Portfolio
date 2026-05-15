import { Article } from "@/components/layout/Article";
import { PaginationLink } from "@/components/layout/PaginationLink";
import { CertificateTimeline } from "@/components/certificates/CertificateTimeline";

export default function CertificatesPage() {
  return (
    <Article page="certificates" title="My Certificates">
      <CertificateTimeline />
      <PaginationLink href="/contact" />
    </Article>
  );
}
