import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ViewTransition } from "react";
import { getProduct, products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

type Params = Promise<{ id: string }>;

export default async function ProductPage({ params }: { params: Params }) {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
      >
        ← Back to shop
      </Link>

      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <ViewTransition name={`product-image-${product.id}`}>
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-900">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              className="object-cover"
            />
          </div>
        </ViewTransition>

        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-semibold tracking-tight">
            {product.name}
          </h1>
          <p className="mt-3 text-2xl tabular-nums text-zinc-700 dark:text-zinc-300">
            ${product.price}
          </p>
          <p className="mt-6 max-w-prose text-base leading-7 text-zinc-600 dark:text-zinc-400">
            {product.description}
          </p>

          <button
            type="button"
            className="mt-10 inline-flex h-12 w-full max-w-xs items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            Add to cart
          </button>
        </div>
      </div>
    </main>
  );
}
