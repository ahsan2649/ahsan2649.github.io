const app = Vue.createApp({
  data() {
    return {
      selecteditem: 0,
    };
  },
  methods: {
    displayItem(index) {
      this.selecteditem = index;
    },
    decrement() {
      if (this.selecteditem > 0) {
        this.selecteditem--;
      }
    },
    increment(length) {
      if (this.selecteditem < length - 1) {
        this.selecteditem++;
      }
    },
  },
});
