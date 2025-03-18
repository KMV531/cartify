import { Category, Product } from "@/sanity.types"
import ProductGrid from "./ProductGrid"

interface Props {
  products: Product[]
  title?: boolean
}

const ProductList = ({ products, title }: Props) => {
  return (
    <div className="pb-32">
      {title && (
        <div className="pb-5">
          <h2 className="text-2xl font-semibold text-gray-600">
            Day of the <span className="text-lightBlue">Deal</span>
          </h2>
          <p className="text-sm text-gray-500 font-thin">
            Don&apos;t wait. The time will never be just right.
          </p>
        </div>
      )}
      <ProductGrid products={products} />
    </div>
  )
}

export default ProductList
