"use client";

import { useEffect, useState } from "react";
import { Article } from "@/components/Article";
import { PaginationLink } from "@/components/PaginationLink";
import { products, type Product } from "@/data/products";

function ProductCard({ product }: { product: Product }) {
  const [activeImage, setActiveImage] = useState(0);
  const image = product.images[activeImage] ?? product.images[0];

  useEffect(() => {
    if (product.images.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % product.images.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, [product.images.length]);

  return (
    <li className="overflow-hidden rounded-[18px] border border-portfolio-border bg-portfolio-card/85 shadow-glass backdrop-blur-md">
      <figure className="relative min-h-[360px] overflow-hidden bg-portfolio-soft/80 [clip-path:inset(0_round_18px)] [contain:paint] md:min-h-[460px]">
        <img
          className="absolute inset-0 h-full w-full scale-110 object-cover object-center opacity-20 blur-xl"
          src={image.src}
          alt=""
          aria-hidden="true"
        />
        <img
          className={`absolute inset-0 z-[1] ${image.imageClass}`}
          src={image.src}
          alt={image.alt}
        />
      </figure>

      <div className="flex flex-col justify-center p-6 md:p-8">
        <div className="mb-4 flex flex-wrap gap-2">
          {product.categories.map((category) => (
            <span
              className="rounded-full bg-portfolio-soft/80 px-3 py-1 text-xs text-portfolio-muted"
              key={category}
            >
              {category}
            </span>
          ))}
        </div>

        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-portfolio-gold">
          {product.status}
        </p>
        <h3 className="mb-2 text-[28px] font-semibold text-portfolio-text">
          {product.title}
        </h3>
        <p className="mb-4 text-[16px] text-portfolio-accent">
          {product.tagline}
        </p>
        <p className="text-[15px] leading-7 text-portfolio-muted">
          {product.description}
        </p>

        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          <a
            className="rounded-lg bg-portfolio-soft/80 px-4 py-3 text-center text-sm font-semibold text-portfolio-gold transition hover:bg-portfolio-gold/10 hover:shadow-[0_0_20px_rgba(122,149,143,0.14)]"
            href={product.links.preview}
            target="_blank"
            rel="noopener noreferrer"
          >
            Preview
          </a>
          <a
            className="rounded-lg bg-portfolio-soft/80 px-4 py-3 text-center text-sm font-semibold text-portfolio-gold transition hover:bg-portfolio-gold/10 hover:shadow-[0_0_20px_rgba(122,149,143,0.14)]"
            href={product.links.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </li>
  );
}

export default function ProductsPage() {
  return (
    <Article page="products" title="Products">
      <section>
        <ul className="grid gap-8">
          {products.map((product) => (
            <ProductCard product={product} key={product.title} />
          ))}
        </ul>
      </section>

      <PaginationLink href="/experience" />
    </Article>
  );
}
