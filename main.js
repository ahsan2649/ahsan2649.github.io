const app = Vue.createApp({
    data() {
        return {
            debug: {
                selectedItem: 0
            }
        }
    },
    methods: {
        displayItem(index) {
            this.debug.selectedItem = index
            console.log(index)
        },
        decrement() {
            if (this.debug.selectedItem > 0) {
                this.debug.selectedItem--
            }
        },
        increment(length) {
            if (this.debug.selectedItem < length-1) {
                this.debug.selectedItem++
            }
        }
    }
})