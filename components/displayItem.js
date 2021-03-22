app.component('displayitem', {
    props: {
        selecteditem: {
            type: Number,
            required: true
        }
    },
    template:
    /*html*/
    `<div id="window">
        <div id="title">{{debug.items[selecteditem].title + selecteditem}}</div>
        <div id="carousel">{{debug.items[selecteditem].carousel + selecteditem}}</div>
        <div id="description">{{debug.items[selecteditem].description + selecteditem}}</div>
    </div>`,
    data() {
        return {
            debug: {
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
        
    }
})