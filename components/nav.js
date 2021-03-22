App.component('nav-bar', {
    template:
        /*html*/
        `<div class="nav-bar">
            <ul style="list-style-type:none">
                <li v-for="pic in pics">{{pic.name}}</li>
            </ul>
        </div>`,
    data(){
        return{
            pics: [
                { name: 'button' },
                { name: 'button' },
                { name: 'button' },
                { name: 'button' },
                { name: 'button' },
                { name: 'button' }]
        }
    }
})