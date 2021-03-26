app.component("displaycarousel", {
  props: {
    selecteditem: {
      type: Number,
      required: true,
    },
  },
  template:
    /*html*/
    `<div id="carousel">
    <div v-if="this.imagepaths[this.selecteditem].length>1" @click="decrementpic(this.imagepaths[this.selecteditem].length)" class="carousel-arrow">&lt</div>
    <div v-for="item in imagepaths[selecteditem]" v-html="item.src" width=800 :class="item.isActive ? 'displayimg' : 'hideimg'"></div>
    <div v-if="this.imagepaths[this.selecteditem].length>1" @click="incrementpic(this.imagepaths[this.selecteditem].length)" class="carousel-arrow" >></div>
    </div>`,
  data() {
    return {
      selectedpic: 0,
      imagepaths: [
        [
          {
            isActive: true,
            src: `<img height=450 src="./images/me.jpg" alt="Yours Truly">`,
          },
        ],
        [
          {
            isActive: true,
            src: `<iframe width="800" height="450" src="https://www.youtube.com/embed/i7OZLEgsJ3c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
          },
        ],
        [
          {
            isActive: true,
            src: `<iframe width="800" height="450" src="https://www.youtube.com/embed/MeY7A2XuDDc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
          },
        ],
        [
          {
            isActive: true,
            src: `<iframe width="800" height="450" src="https://www.youtube.com/embed/JdSDHHzQq68" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
          },
          {
            isActive: false,
            src: `<img height=450 src="./images/duin.JPG" alt="Arduino, Sensor and Light">`,
          },
          {
            isActive: false,
            src: `<img height=450 src="./images/light.JPG" alt="Lighting up the Poi">`,
          },
          {
            isActive: false,
            src: `<img height=450 src="./images/flower.jpg" alt="flower pattern">`,
          },
        ],
        [
          {
            isActive: true,
            src: `<iframe width="800" height="450" src="https://www.youtube.com/embed/7UVmD600P_8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
          },
        ],
        [
          {
            isActive: true,
            src: `<iframe width="800" height="450" src="https://www.youtube.com/embed/PvIOwp9NG74" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
          },
        ],
        [
          {
            isActive: true,
            src: `<img src="./images/AboutWeb.jpg" height=450>`,
          },
        ],
      ],
    };
  },
  methods: {
    decrementpic(length) {
      if (this.selectedpic > 0) {
        this.selectedpic--;
      } else {
        this.selectedpic = length - 1;
      }
      this.activatePic(this.selecteditem);
    },
    incrementpic(length) {
      if (this.selectedpic < length - 1) {
        this.selectedpic++;
      } else {
        this.selectedpic = 0;
      }
      this.activatePic(this.selecteditem);
    },
    activatePic(index) {
      for (item in this.imagepaths[index]) {
        this.imagepaths[index][item].isActive = false;
      }
      this.imagepaths[index][this.selectedpic].isActive = true;
    },
  },
});
