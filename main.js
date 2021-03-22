const app = {
    data() {
        return {
            debug: {
                nav: ['item', 'item', 'item', 'item', 'item'],
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

}

