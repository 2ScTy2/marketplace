"use client"

import { useEffect } from "react"
import { observer } from "mobx-react-lite"
import { useParams } from "next/navigation"

import { useStores } from "@/stores/StoreProvider"

function ProductPage() {
    const params = useParams()

    const { productStore } = useStores()

    useEffect(() => {
        if (!params.id) return

        productStore.loadProduct(
            Number(params.id)
        )
    }, [params.id])

    if (productStore.loading) {
        return <h1>Загрузка...</h1>
    }

    if (!productStore.product) {
        return <h1>Товар не найден</h1>
    }

    return (
        <div>
            <img
                src={productStore.product.image}
                alt={productStore.product.name}
                width={300}
            />

            <h1>
                {productStore.product.name}
            </h1>

            <p>
                {productStore.product.description}
            </p>

            <h2>
                {productStore.product.price} сом
            </h2>
        </div>
    )
}

export default observer(ProductPage)