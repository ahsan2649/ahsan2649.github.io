const app = Vue.createApp({
  data() {
    return {
      selectedItem: 0,
    };
  },
  methods: {
    displayItem(index) {
      this.selectedItem = index;
    },
    decrement() {
      if (this.selectedItem > 0) {
        this.selectedItem--;
      }
    },
    increment(length) {
      if (this.selectedItem < length - 1) {
        this.selectedItem++;
      }
    },
  },
});
