import { FavoritesStore } from "./FavoritesStore";
import { ProductsStore } from "./ProductsStore";
import { ProductStore } from "./ProductStore";

export class RootStore {
    productsStore: ProductsStore
    productStore: ProductStore
    favoritesStore: FavoritesStore

    constructor() {
        this.productsStore = new ProductsStore()
        this.productStore = new ProductStore()
        this.favoritesStore = new FavoritesStore()
    }
}