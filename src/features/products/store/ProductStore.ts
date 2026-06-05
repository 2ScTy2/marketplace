import { getProductById } from "@/shared/api/product"
import { Product } from "@/shared/types/product"
import { makeAutoObservable, runInAction } from "mobx"


export class ProductStore {

    product: Product | null = null
    loading: boolean = false

    constructor() {
        makeAutoObservable(this)
    }

    async loadProduct(id: number) {
        try {
            this.loading = true

            const product = await getProductById(id)
            console.log(product);
            

            runInAction(()=> {
                this.product = product
            })
        } finally {
            runInAction(() => {
                this.loading = false
            })
        }
    }
}

export const prdouctStore = new ProductStore()
