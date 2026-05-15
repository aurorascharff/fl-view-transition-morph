import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";
import { products } from "@/lib/products";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <header className="mb-12">
        <h1 className="text-4xl font-semibold tracking-tight">Shop</h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          A small catalog of everyday goods. Click any product to see the
          detail — the thumbnail morphs into the hero image.
        </p>
      </header>

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <li key={product.id}>
            <Link
              href={`/products/${product.id}`}
              className="group block"
            >
              <ViewTransition name={`product-image-${product.id}`}>
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    priority={false}
                  />
                </div>
              </ViewTransition>
              <div className="mt-3 flex items-baseline justify-between gap-4">
                <h2 className="text-base font-medium text-zinc-900 dark:text-zinc-100">
                  {product.name}
                </h2>
                <span className="text-sm tabular-nums text-zinc-600 dark:text-zinc-400">
                  ${product.price}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
