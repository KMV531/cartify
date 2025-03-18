import Container from "@/components/Container"
import DiscountBanner from "@/components/DiscountBanner"
import ProductList from "@/components/ProductList"
import { getAllProducts, getSale } from "@/sanity/helpers"

export default async function Home() {
  const sales = await getSale()
  const products = await getAllProducts()

  return (
    <div>
      <Container>
        <DiscountBanner sales={sales} />
        <ProductList products={products} title={true} />
      </Container>
    </div>
  )
}
