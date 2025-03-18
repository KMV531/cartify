import { type SchemaTypeDefinition } from "sanity"

// Importing the schema types
import { categoryType } from "./categoryType"
import { salesType } from "./saleType"
import { productType } from "./ProductType"
import { orderType } from "./orderType"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType, salesType, productType, orderType],
}
