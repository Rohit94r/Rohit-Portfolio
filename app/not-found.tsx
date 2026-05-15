import Link from "next/link";

export default function NotFound() {
  return (
    <div className="error-page">
      <h1>404</h1>
      <p>Page not found</p>
      <Link href="/">Back to portfolio</Link>
    </div>
  );
}
