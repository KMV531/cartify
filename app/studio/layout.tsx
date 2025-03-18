import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ecommerce Website for Shoppers",
  description: "Ecommerce Website for sales and maximazing profits",
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
