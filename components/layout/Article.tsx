import type { ReactNode } from "react";

export function Article({
  title,
  page,
  children,
}: {
  title: string;
  page: string;
  children: ReactNode;
}) {
  return (
    <article className={`${page} active`} data-page={page}>
      <header>
        <h2 className="h2 article-title">{title}</h2>
      </header>
      {children}
    </article>
  );
}
