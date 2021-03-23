app.component("navbar", {
  props: {
    selecteditem: {
      type: Number,
    },
  },
  template:
    /*html*/
    `<div id="navbar">
        <div @click="decrementEmit" class="navbar-arrow arrow-left">&lt</div>
        <ul>
            <li v-for="(item, index) in this.nav" :key="index" @click="changeDisplay(index)" alt="item" :class="index==this.selecteditem ? 'activeItem' : 'inactiveItem' ">O</li>
        </ul>
        <div @click="incrementEmit" class="navbar-arrow arrow-right">></div>
    </div>`,
  data() {
    return {
      nav: [
        {
          isActive: false,
          name: "item",
        },
        {
          isActive: false,
          name: "item",
        },
        {
          isActive: false,
          name: "item",
        },
        {
          isActive: false,
          name: "item",
        },
        {
          isActive: false,
          name: "item",
        },
      ],
    };
  },
  methods: {
    changeDisplay(index) {
      this.$emit("change-display", index);
      //console.log('emitted' + ' ' + index)
    },
    decrementEmit() {
      this.$emit("decrement-emit", this.nav.length);
      //console.log('emitted' + ' ' + index)
    },
    incrementEmit() {
      this.$emit("increment-emit", this.nav.length);
      //console.log('emitted' + ' ' + index)
    },
  },
});
