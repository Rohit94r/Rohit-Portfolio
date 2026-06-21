import Link from "next/link";

export function PaginationLink({
  href,
  label = "Next >",
}: {
  href: string;
  label?: string;
}) {
  return (
    <div className="pagination-box">
      <Link className="pagination-button" href={href}>
        {label}
      </Link>
    </div>
  );
}
