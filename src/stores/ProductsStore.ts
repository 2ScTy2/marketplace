import { Product } from "@/shared/types/product";
import { makeAutoObservable, runInAction } from "mobx";

import { getProducts } from "@/shared/api/product";

export class ProductsStore {
    products: Product[] = []
    loading = false
    error: string | null = null;

    constructor() {
        makeAutoObservable(this)
    }

    async loadProducts() {
        try {
            this.loading = true
            const products = await getProducts()
            
            runInAction(() => {
                this.products = products
            })

        }catch (error) {

            runInAction(() => {
                this.error = "Не удалось загрузить товары";
            })

        }finally {
                runInAction(() => {
                this.loading = false;
            });
        }
    }

    
}

export const productsStore = new ProductsStore()