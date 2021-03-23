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
    decrement(length) {
      if (this.selecteditem > 0) {
        this.selecteditem--;
      } else {
        this.selecteditem = length - 1;
      }
    },
    increment(length) {
      if (this.selecteditem < length - 1) {
        this.selecteditem++;
      } else {
        this.selecteditem = 0;
      }
    },
  },
});
