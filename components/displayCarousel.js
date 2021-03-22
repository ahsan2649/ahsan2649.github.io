app.component("displaycarousel", {
  props: {
    selecteditem: {
      type: Number,
      required: true,
    },
  },
  template:
    /*html*/
    `<div id="carousel">{{imagepaths[selecteditem][0]}}</div>`,
  data() {
    return { imagepaths: [[123], [456], [789], [101112], [131415]] };
  },
  methods: {},
});
