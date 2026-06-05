import { makeAutoObservable } from "mobx"


export class NotificationStore {
    message: string = ''
    isOpen: boolean = false

    private timeoutId: ReturnType<typeof setTimeout> | null = null

    constructor() {
        makeAutoObservable(this)
    }

    show(message: string) {

        if(this.timeoutId) {
            clearTimeout(this.timeoutId)
        }

        this.message = message
        this.isOpen = true

        this.timeoutId = setTimeout(() => {
            this.hide()
        }, 2000)
    }

    hide() {
        this.isOpen = false
        this.message = ''
    }
}

export const notificationStore = new NotificationStore()