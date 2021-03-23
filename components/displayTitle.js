app.component("displaytitle", {
  props: {
    selecteditem: {
      type: Number,
      required: true,
    },
  },
  template:
    /*html*/
    `<div id="title"><h2>{{titles[selecteditem]}}</h2></div>`,
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
