app.component("displaytitle", {
  props: {
    selecteditem: {
      type: Number,
      required: true,
    },
  },
  template:
    /*html*/
    `<div id="title">{{titles[selecteditem]}}</div>`,
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
