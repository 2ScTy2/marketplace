import { Product } from "../types/product";


export const getProducts = async (): Promise<Product[]> => {
    const response = await fetch("api/products")

    if (!response.ok) {
        throw new Error("Ошибка загрузки товаров")
    }

    return response.json()
}

export const getProductById  = async (id: number) : Promise <Product> => {
    
    const response = await fetch (`/api/products/${id}`)
    

    if (!response.ok) {
        throw new Error("Товар не найден")
    } 
    
    return response.json()

}