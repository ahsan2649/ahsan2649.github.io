app.component("displaydescription", {
  props: {
    selecteditem: {
      type: Number,
      required: true,
    },
  },
  template:
    /*html*/
    `<div id="description"><div v-html="descriptions[this.selecteditem]"></div></div>`,
  data() {
    return {
      descriptions: [
        /*html*/
        `<p>Delicious Delicacies is a prototype for a time management game. The player takes on the role of managing a diner, as they show customers to their tables, take their orders, and prepare and serve their food. This is the first proper prototype that I made with Unity.
        For the gameplay, I coded a state machine that cycles between different states of the table - free, menu checking, ordering, waiting, eating, and billing, as well as a state machine for the food dispenser, that cycles between free, preparing and serving state. Depending on the state, customers and food can be selected and assigned to tables.</p>`,
        /*html*/
        `<p>Delicious Delicacies is a prototype for a time management game. The player takes on the role of managing a diner, as they show customers to their tables, take their orders, and prepare and serve their food. This is the first proper prototype that I made with Unity.
        For the gameplay, I coded a state machine that cycles between different states of the table - free, menu checking, ordering, waiting, eating, and billing, as well as a state machine for the food dispenser, that cycles between free, preparing and serving state. Depending on the state, customers and food can be selected and assigned to tables.</p>`,
        /*html*/
        `<p>An audio visualizer made in Unity by performing a Fast Fourier Transform on the spectrum of the audio. The resulting data is split into an array of 256 values, from which clusters are summed, averaged, and mapped to give out 8 frequency bands. The average of the sum of the frequency bands also serve as an amplitude input. Together, they can be mapped to different values, such as column heights, colors, opacities etc.
        For this particular scene, the 8 frequency bands are input into 8 colored columns, and the amplitude is input into the color of the material and light emitting from the spinning spheres. The result is a satisfying animation with coherence to the playing audio.</p>`,
        /*html*/
        `<p>Poi-duino 2.0 is a project that combines sound with lighting through Arduino code. The design for the project, as well as the calculations for the resistance was done by two of my classmates. The assembly and coding was done by myself.
        A KY-038 sound sensor grabs audio from the ambience, which is then converted into three values of different frequency ranges through the use of a Fast Fourier Transform. The highest of the values goes into one of three analog outputs for red, green or blue light, while the other values are mapped to lower outputs. The result is a lighting system that changes with the noise in the background, which I use for poi spinning.</p>`,
        /*html*/
        `<p>DX-Ball was one of my most favorite games from when I was in Kindergarten. So after I first learned Unity, I sought to make a clone of it myself. After a few iterations and designs, I've arrived at this prototype. For me, it was a good exercise in basic problem solving, as well as understanding the bridge between design and programming.</p>`,
        /*html*/
        `<p>Typo-logy is a typing game I made for myself in Unity to practice Dvorak typing. It takes in a given exercise string, and outputs each character at a specific pace, to be typed within a specific time limit. The characters appear as simple text on top of a simple sprite. Scores are tallied based on correct and incorrect keypresses.</p>`,
        /*html*/
        `<p>After finishing up with my other projects, I took up online lessons on basic VueJS, and created this website from scratch while I was learning it. I specifically chose Vue as my framework for web development, because I felt React was a bit too commonplace. The unexpected pay-off was that I was able to learn the basics very fast, and get the website up and running in a week, with only prior knowledge of HTML, CSS, and a little more than basic JavaScript.
        </p>
        <p>
        The problem solving mindset that I've begun to develop while working on my game projects translated very well over to the field of web development. The result is a very modular website that can be easily scaled, and iterated on with ease and precision.
        </p>`,
      ],
    };
  },
  methods: {},
});
