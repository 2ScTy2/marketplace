import Link from "next/link"

import { Product } from "@/shared/types/product"
import { useStores } from "@/stores/StoreProvider"
import { observer } from "mobx-react-lite"

import * as S from './ProductCard.styled'

interface Props {
    product: Product
}

export default observer( function ProductCard ({product}: Props) {
    const { favoritesStore } = useStores()

    const isFav = favoritesStore.isFavorite(product.id)


    return (
            <S.Card>
                <Link href={`/products/${product.id}`}>
                    <S.ImgWrap>
                        <S.Button 
                            onClick={() => {favoritesStore.toggleFavorite(product)}}
                        >
                            {isFav ? '⭐' : '☆'}
                        </S.Button>
                        <S.Image src={product.image} alt={product.name} />
                    </S.ImgWrap>
                    <S.Title>{product.name}</S.Title>
                    <S.Text>Цена :{product.price} $</S.Text>
                </Link>
            </S.Card>

    )
})
