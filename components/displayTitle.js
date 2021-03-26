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
        "Regarding Myself",
        "Delicious Delicacies",
        "Audio Visualizer",
        "Poi-duino 2.0",
        "DX-Ball Clone",
        "Typo-logy",
        "About this website",
      ],
    };
  },
  methods: {},
});
