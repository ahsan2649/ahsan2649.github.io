app.component("displaydescription", {
  props: {
    selecteditem: {
      type: Number,
      required: true,
    },
  },
  template:
    /*html*/
    `<div id="description">{{'description for ' + descriptions[selecteditem]}}</div>`,
  data() {
    return {
      descriptions: [
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
