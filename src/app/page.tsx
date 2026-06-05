'use client'

import ProductCard  from "@/features/products/components/ProductCard/ProductCard";
import ProductGrid from "@/shared/ui/Grid/Grid";
import { useStores } from "@/providers/StoreProvider";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";


export default observer(function HomePage() {
  const { productsStore } = useStores()

    useEffect(() => {
      productsStore.loadProducts()
    },[])

    if (productsStore.loading) {
    return <h2>Загрузка...</h2>;
  }

    return (
          <ProductGrid>
              {productsStore.filteredProduct.map((product) => (
                <ProductCard
                  key={product.id}
                  product = {product}            
                />
              ))}
          </ProductGrid>
    )
})