import { Product } from "@/shared/types/product"
import { makeAutoObservable } from "mobx"

type CartItem = {
    product: Product,
    quantity: number
}

export class CartStore {
    items: CartItem[] = []
    quantity: number = 0

    constructor() {
        makeAutoObservable(this)
    }

    addToCart(product: Product) {   
        const item = this.items.find(
            i => i.product.id === product.id
        )
        if (item) {
            item.quantity += 1
        } else {
            this.items.push({
                product,
                quantity: 1
            })
            this.saveCartItems()
        }

    }

    decreaseQuantity(id: number) {
        const item = this.items.find(
            i => i.product.id === id
        )
        if(!item) return

        if(item.quantity !== 1) {
            item.quantity--
        }
    }

    increaseQuantity(id: number) {
        const item = this.items.find(
            i => i.product.id === id
        )
        if(!item) return

        item.quantity++
    }

    removeFromCart(productId: number) {
        this.items = this.items.filter(
            i => i.product.id !== productId
        )

    }
    saveCartItems() {
        localStorage.setItem('cart', JSON.stringify(this.items))
    }

    loadCartItems() {
        const data = localStorage.getItem('cart')

        if(!data) return

        this.items = JSON.parse(data)

    }

    get totalQuantity() {
        const total = this.items.reduce((acc, curr) => {
            return acc + curr.quantity
        }, 0)

        return total
    }

    get totalPrice() {
        return this.items.reduce((acc, curr) => {
            return ( curr.quantity + curr.product.price) * acc
        }, 0)
    }
}

export const cartStore = new CartStore()