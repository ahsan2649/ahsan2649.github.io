app.component("displaytitle", {
  props: {
    selecteditem: {
      type: Number,
      required: true,
    },
  },
  template:
    /*html*/
    `<h2 id="title">{{titles[selecteditem]}}</h2>`,
  data() {
    return {
      titles: [
        "Delicious Delicacies",
        "Typology",
        "Poi-duino 2.0",
        "DX-Ball Clone",
        "Audio Visualizer",
      ],
    };
  },
  methods: {},
});
