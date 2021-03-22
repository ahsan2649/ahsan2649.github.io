App.component('window', {
    template:
        /*html*/
        `<div class="window">
            <item v-for="item in items"></item>
        </div>
        `,
    data(){
        return{
            items: [
                {display: 'display', description: 'description'},
                {display: 'display', description: 'description'},
                {display: 'display', description: 'description'},
                {display: 'display', description: 'description'},
                {display: 'display', description: 'description'}]
        }
    }
})