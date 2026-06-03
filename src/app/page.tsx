'use client'

import Container from "@/components/ui/Container/Container";
import ProductCard  from "@/components/ProductCard/ProductCard";
import ProductGrid from "@/components/ProductGrid/ProductGrid";
import { useStores } from "@/stores/StoreProvider";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import Header from "@/components/Header/Header";


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
              {productsStore.products.map((product) => (
                <ProductCard
                  key={product.id}
                  product = {product}            
                />
              ))}
          </ProductGrid>
        </Container>
    )
})