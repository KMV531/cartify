import React from "react"
import ProductCart from "./ProductCart"
import { Product } from "@/sanity.types"
interface Props {
  products: Product[]
}

const ProductGrid = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products?.map((product) => (
        <ProductCart key={product?._id} product={product} />
      ))}
    </div>
  )
}

export default ProductGrid
