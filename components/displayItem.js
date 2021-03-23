app.component("displayitem", {
  props: {
    selecteditem: {
      type: Number,
      required: true,
    },
  },
  template:
    /*html*/
    `<div id="window">
        <displaytitle :selecteditem="selecteditem"></displaytitle>
        <displaycarousel :selecteditem="selecteditem"></displaycarousel>
        <displaydescription :selecteditem="selecteditem"></displaydescription>
    </div>`,
  data() {
    return {};
  },
  methods: {},
});
