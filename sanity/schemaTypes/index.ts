import { type SchemaTypeDefinition } from "sanity"

// Importing the schema types
import { salesType } from "./saleType"
import { productType } from "./ProductType"
import { orderType } from "./orderType"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [salesType, productType, orderType],
}
