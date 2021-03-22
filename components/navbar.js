app.component('navbar', {
    template:
    /*html*/
    `<div id="navbar">
        <div @click="decrement">Go up</div>
        <ul>
            <li v-for="(item, index) in debug.nav" :key="index" @click="changeDisplay(index)">{{item + index.toString()}}</li>
        </ul>
        <div @click="increment">Go down</div>
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
        },
        decrement() {
            this.$emit('decrement')
            //console.log('emitted' + ' ' + index)
        },
        increment() {
            this.$emit('increment', this.debug.nav.length)
            //console.log('emitted' + ' ' + index)
        }
    }
})
