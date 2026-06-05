'use client'

import Container from "@/shared/ui/Container/Container";
import ProductCard  from "@/features/products/components/ProductCard/ProductCard";
import ProductGrid from "@/shared/ui/ProductGrid/ProductGrid";
import { useStores } from "@/providers/StoreProvider";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import Header from "@/widgets/Header/Header";


export default observer(function HomePage() {
  const { productsStore } = useStores()

    useEffect(() => {
      productsStore.loadProducts()
    },[])

    if (productsStore.loading) {
    return <h2>Загрузка...</h2>;
  }

    return (
        <Container>
          <Header/>
          <ProductGrid>
              {productsStore.filteredProduct.map((product) => (
                <ProductCard
                  key={product.id}
                  product = {product}            
                />
              ))}
          </ProductGrid>
        </Container>
    )
})