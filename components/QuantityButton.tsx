import { Product } from "@/sanity.types"
import { Button } from "./ui/button"
import { MinusCircle, PlusCircle } from "lucide-react"
import toast from "react-hot-toast"
import { cn } from "@/lib/utils"
import userCartStore from "@/store"

interface Props {
  product: Product
  className?: string
}

const QuantityButton = ({ product, className }: Props) => {
  const { addItem, removeItem, getItemCount } = userCartStore()
  const handleRemoveProduct = () => {
    removeItem(product?._id)
    if (itemCount > 1) {
      toast.success("Quantity Decreased Successfuly")
    } else {
      toast.success(
        `${product?.name?.substring(0, 12)}... removed successfully`
      )
    }
  }
  const handleAddProduct = () => {
    addItem(product)
    toast.success("Quantity Increased Successfuly")
  }
  const itemCount = getItemCount(product?._id)

  return (
    <div className={cn("flex items-center gap-1 pb-1 text-base", className)}>
      <Button
        variant="outline"
        size="icon"
        className="w-6 h-6"
        onClick={handleRemoveProduct}
      >
        <MinusCircle />
      </Button>
      <span
        className="font-semibold w-8 text-darkBlue 
      text-center"
      >
        {itemCount}
      </span>
      <Button
        variant="outline"
        size="icon"
        className="w-6 h-6"
        onClick={handleAddProduct}
      >
        <PlusCircle />
      </Button>
    </div>
  )
}

export default QuantityButton
