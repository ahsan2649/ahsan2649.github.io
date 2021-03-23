app.component("displaycarousel", {
  props: {
    selecteditem: {
      type: Number,
      required: true,
    },
  },
  template:
    /*html*/
    `<img :src="imagepaths[selecteditem]" width="600">`,
  data() {
    return {
      imagepaths: [
        "./images/pexels-ave-calvar-martinez-3497624.jpg",
        "./images/pexels-james-lee-2017021.jpg",
        "./images/pexels-skyler-ewing-4793432.jpg",
        "./images/pexels-dominykas-4411214.jpg",
        "./images/pexels-saya-kimura-401107.jpg",
      ],
    };
  },
  methods: {},
});
