'use client'

import Container from "@/components/Container/Container";
import ProductCard  from "@/components/ProductCard/ProductCard";
import { useStores } from "@/stores/StoreProvider";
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
        <Container>
          {productsStore.products.map((product) => (
            <ProductCard
            key={product.id}
            product = {product}            
            />
          ))}
        </Container>
    )
})