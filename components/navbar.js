app.component('navbar', {
    template:
    /*html*/
    `<div id="navbar">
        <ul>
            <li v-for="(item, index) in debug.nav" :key="index" @click="changeDisplay(index)">{{item + index.toString()}}</li>
        </ul>
    </div>`,
    data() {
        return {
            debug: {
                nav: ['item', 'item', 'item', 'item', 'item']
            }
        }
    },
    methods: {
        changeDisplay(index) {
            this.$emit('change-display', index)
            //console.log('emitted' + ' ' + index)
        }
    }
})
