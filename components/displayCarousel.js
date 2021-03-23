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
    <div @click="decrementpic" class="carousel-arrow">&lt</div>
    <img v-for="item in imagepaths[selecteditem]" :src="item.src" width=600 :class="item.isActive ? 'displayimg' : 'hideimg'">
    <div @click="incrementpic" class="carousel-arrow" >></div>
    </div>`,
  data() {
    return {
      selectedpic: 0,
      imagepaths: [
        [
          { isActive: true, src: "./images/1/pexels-andreea-ch-1204941.jpg" },
          {
            isActive: false,
            src: "./images/1/pexels-andrew-wilus-5515956.jpg",
          },
          {
            isActive: false,
            src: "./images/1/pexels-ave-calvar-martinez-3497624.jpg",
          },
          {
            isActive: false,
            src: "./images/1/pexels-ave-calvar-martinez-4279016.jpg",
          },
          { isActive: false, src: "./images/1/pexels-cottonbro-5319516.jpg" },
        ],
        [
          { isActive: true, src: "./images/2/pexels-dominykas-4411214.jpg" },
          {
            isActive: false,
            src: "./images/2/pexels-eberhard-grossgasteiger-1002722.jpg",
          },
          { isActive: false, src: "./images/2/pexels-emma-li-6589610.jpg" },
          {
            isActive: false,
            src: "./images/2/pexels-evie-shaffer-4060937.jpg",
          },
          {
            isActive: false,
            src: "./images/2/pexels-free-nature-stock-567584.jpg",
          },
        ],
        [
          {
            isActive: true,
            src: "./images/3/pexels-irina-iriser-1379627.jpg",
          },
          { isActive: false, src: "./images/3/pexels-james-lee-2017021.jpg" },
          { isActive: false, src: "./images/3/pexels-kelly-lacy-4171927.jpg" },
          { isActive: false, src: "./images/3/pexels-lynn-smith-3062964.jpg" },
          {
            isActive: false,
            src: "./images/3/pexels-maksim-goncharenok-5550317.jpg",
          },
        ],
        [
          {
            isActive: true,
            src: "./images/4/pexels-maria-orlova-4913514.jpg",
          },
          {
            isActive: false,
            src: "./images/4/pexels-matheus-bertelli-4558481.jpg",
          },
          { isActive: false, src: "./images/4/pexels-meryl-katys-6978515.jpg" },
          {
            isActive: false,
            src: "./images/4/pexels-natalia-hutak-4072639.jpg",
          },
          {
            isActive: false,
            src: "./images/4/pexels-olha-ruskykh-6455059.jpg",
          },
        ],
        [
          { isActive: true, src: "./images/5/pexels-peter-olexa-3875821.jpg" },
          { isActive: false, src: "./images/5/pexels-pok-rie-6029883.jpg" },
          {
            isActive: false,
            src: "./images/5/pexels-renda-eko-riyadi-1537875.jpg",
          },
          { isActive: false, src: "./images/5/pexels-saya-kimura-401107.jpg" },
          {
            isActive: false,
            src: "./images/5/pexels-skyler-ewing-4793432.jpg",
          },
        ],
      ],
    };
  },
  methods: {
    decrementpic() {
      if (this.selectedpic > 0) {
        this.selectedpic--;
      } else {
        this.selectedpic = this.imagepaths.length - 1;
      }
      this.activatePic(this.selecteditem);
    },
    incrementpic() {
      if (this.selectedpic < this.imagepaths.length - 1) {
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
