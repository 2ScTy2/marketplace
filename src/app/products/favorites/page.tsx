'use client'

import ProductCard from "@/features/products/components/ProductCard/ProductCard";
import { useStores } from "@/stores/StoreProvider";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";


export default observer(function FavoritesPage() {
    const {favoritesStore} = useStores()
    
    useEffect(() => {
        favoritesStore.loadFavorites()
    }, [])
    
    return (
        <div>
            {favoritesStore.favorites.map((fav) => (
                <ProductCard
                    key={fav.id}
                    product={fav}
                />
            ))}
        </div>
    )
}) 