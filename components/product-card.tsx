import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import type { Product } from "@/lib/types"

interface ProductCardProps {
    product: Product
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                    src={product.images[0] || "/placeholder.svg"}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <Link href={`/product/${product.slug}`}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.name}
                        </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${Number(product.price).toFixed(2)}</p>
            </div>
            <div className="mt-2 flex items-center">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(Number(product.rating)) ? "text-yellow-400" : "text-gray-200"}`}
                        fill="currentColor"
                    />
                ))}
            </div>
            <p className="mt-2 text-sm text-gray-500">{product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}</p>
        </div>
    )
}

