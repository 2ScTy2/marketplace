import { Product } from "@/shared/types/product";
import { makeAutoObservable, runInAction } from "mobx";

import { getProducts } from "@/shared/api/product";

export class ProductsStore {
    products: Product[] = []
    loading = false
    error: string | null = null;
    
    search = ""


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

    setSearch(value: string) {
        this.search = value
        this.filteredProduct
    }

    get filteredProduct() {
        const search = this.search.toLowerCase()
        
        if (this.search === ''){
            return this.products
        }
        return this.products.filter((p) => {
            return p.name
                .toLowerCase()
                .includes(search)
        })
    }
    
}

export const productsStore = new ProductsStore()