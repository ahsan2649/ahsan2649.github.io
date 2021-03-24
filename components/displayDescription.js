app.component("displaydescription", {
  props: {
    selecteditem: {
      type: Number,
      required: true,
    },
  },
  template:
    /*html*/
    `<div id="description"><p>{{descriptions[this.selecteditem]}}</p></div>`,
  data() {
    return {
      descriptions: [
        "Delicious Delicacies is a prototype for a time management game. The player takes on the role of managing a diner, as they show customers to their tables, take their orders, and prepare and serve their food. This is the first proper prototype that I made with Unity.",
        "An audio visualizer made in Unity by performing a Fast Fourier Transform on the spectrum of the audio. The resulting data is split into an array of 256 values, from which clusters are summed, averaged, and mapped to give out 8 frequency bands. The average of the sum of the frequency bands also serve as an amplitude input. Together, they can be mapped to different values, such as column heights, colors, opacities etc.",
        "Poi-duino 2.0 is a project that combines sound with lighting through Arduino code. A KY-038 sound sensor grabs audio from the environment, which is then converted into three values of different frequency ranges through the use of a Fast Fourier Transform. The highest of the values goes into one of three analog outputs for red, green or blue light, while the other values are mapped to lower outputs. The result is a lighting system that changes with the noise in the background, which I use for poi spinning.",
        "DX-Ball was one of my most favorite games from when I was in Kindergarten. So after I first learned Unity, I sought to make a clone of it myself. After a few iterations and designs, I've arrived at this prototype. For me, it was a good exercise in basic problem solving, as well as understanding the bridge between design and programming.",
        "Typo-logy is a typing game I made for myself in Unity to practice Dvorak typing. It takes in a given exercise string, and outputs each character at a specific pace, to be typed within a specific time limit. The characters appear as simple text on top of a simple sprite.",
      ],
    };
  },
  methods: {},
});
