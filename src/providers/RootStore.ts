import { FavoritesStore } from "@/features/favorites/store/FavoritesStore";
import { ProductsStore } from "@/features/products/store/ProductsStore";
import { ProductStore } from "@/features/products/store/ProductStore";
import { CartStore } from "@/features/cart/store/CartStore";
import { NotificationStore } from "@/features/notification/store/NotificationStore";


export class RootStore {
    productsStore: ProductsStore
    productStore: ProductStore
    favoritesStore: FavoritesStore
    cartStore: CartStore
    notificationStore: NotificationStore
    

    constructor() {
        this.productsStore = new ProductsStore()
        this.productStore = new ProductStore()
        this.favoritesStore = new FavoritesStore()
        this.cartStore = new CartStore()
        this.notificationStore  = new NotificationStore
    }
}