import Link from "next/link"

import { Product } from "@/shared/types/product"
import { useStores } from "@/stores/StoreProvider"
import { observer } from "mobx-react-lite"

interface Props {
    product: Product
}

export default observer( function ProductCard ({product}: Props) {
    const { favoritesStore } = useStores()

    const isFav = favoritesStore.isFavorite(product.id)


    return (
            <div>
                <button 
                    onClick={() => {favoritesStore.toggleFavorite(product)}}
                >
                    {isFav ? '⭐' : '☆'}
                </button>
                <Link href={`/products/${product.id}`}>
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.price} $</p>
                </Link>
            </div>

    )
})
