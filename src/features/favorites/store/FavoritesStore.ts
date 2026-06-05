import { Product } from "@/shared/types/product"
import { makeAutoObservable } from "mobx"


export class FavoritesStore {
    favorites: Product[] = []

    constructor() {
        makeAutoObservable(this)
    }

    addFavorite(product: Product) {
        const exist = this.favorites.some((fav) => fav.id === product.id)
        
        if(!exist) {
            this.favorites.push(product)
            this.saveFavorites()
        }
    }

    removeFavorite(id :number) {
        this.favorites = this.favorites.filter((fav) => fav.id !== id)
    }

    isFavorite(id: number) {
        return this.favorites.some(
            fav => fav.id === id
        )
    }
    
    toggleFavorite(product: Product) {
        if (this.isFavorite(product.id)) {

            this.removeFavorite(product.id)
            return
        }

        this.addFavorite(product)
    }
    
    saveFavorites() {
        localStorage.setItem('fav', JSON.stringify(this.favorites))
    }

    loadFavorites() {
        let data = localStorage.getItem('fav')

        if(data !== null) {
            this.favorites = JSON.parse(data)
        }
    }
}


export const favoritesStore = new FavoritesStore()