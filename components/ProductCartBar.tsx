import { ArrowLeftRight, Eye, Heart, ShoppingBag } from "lucide-react"
import React from "react"

const ProductCartBar = () => {
  return (
    <div className="text-gray-500 text-lg flex items-center justify-center gap-2.5">
      <div className="border shadow-md bg-white rounded-xl p-0.5 hover:bg-darkBlue hover:text-white hoverEffect">
        <Heart />
      </div>
      <div className="border shadow-md bg-white rounded-xl p-0.5 hover:bg-darkBlue hover:text-white hoverEffect">
        <Eye />
      </div>
      <div className="border shadow-md bg-white rounded-xl p-0.5 hover:bg-darkBlue hover:text-white hoverEffect">
        <ArrowLeftRight />
      </div>
      <div className="border shadow-md bg-white rounded-xl p-0.5 hover:bg-darkBlue hover:text-white hoverEffect">
        <ShoppingBag />
      </div>
    </div>
  )
}

export default ProductCartBar
