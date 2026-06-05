import Link from "next/link"

import { Product } from "@/shared/types/product"
import { useStores } from "@/providers/StoreProvider"
import { observer } from "mobx-react-lite"

import * as S from './ProductCard.styled'

interface Props {
    product: Product
}

export default observer( function ProductCard ({product}: Props) {
    const { favoritesStore, cartStore, notificationStore } = useStores()

    const isFav = favoritesStore.isFavorite(product.id)

    function handleFav () {
        if(isFav) {
            notificationStore.show('Удалено из избранного')

        }else {
            notificationStore.show('Добавлено в избранное')
        }
        favoritesStore.toggleFavorite(product)
                                
    }

    return (
            <S.Card>
                <Link href={`/products/${product.id}`}>
                    <S.ImgWrap>
                        <S.Button 
                            onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                handleFav()
                            }}
                            whileTap={{
                                scale: 0.8
                            }}
                        >
                            {isFav ? (<S.FavActive/>) : (<S.FavNoTActive/>)}
                        </S.Button>
                        <S.Image src={product.image} alt={product.name} />
                        <S.CartButton
                            onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                cartStore.addToCart(product)
                                notificationStore.show('Добавлено в корзину')
                            }}
                            whileTap={{
                                scale: 0.8
                            }}
                        >
                            <S.CartIcon/>
                        </S.CartButton>
                    </S.ImgWrap>
                    <S.Title>{product.name}</S.Title>
                    <S.Text>Цена: {product.price} $</S.Text>
                </Link>
            </S.Card>

    )
})
