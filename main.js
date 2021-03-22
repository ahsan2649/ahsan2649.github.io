const app = Vue.createApp({
    data() {
        return {
            debug: {
                selectedItem: 0,
                items: [{
                        title: 'title',
                        carousel: 'carousel',
                        description: 'description'
                },
                    {
                    title: 'title',
                    carousel: 'carousel',
                    description: 'description'
                },
                    {
                    title: 'title',
                    carousel: 'carousel',
                    description: 'description'
                },
                    {
                    title: 'title',
                    carousel: 'carousel',
                    description: 'description'
                    },
                    {
                    title: 'title',
                    carousel: 'carousel',
                    description: 'description'
                }]
            }
        }
    },
    methods: {
        displayItem(index) {
            this.debug.selectedItem = index
            console.log(index)
        }
    }
})