<template>
  <div>
    <div style="width: 100%; height: 100%; overflow: hidden;">
      <!-- width表示有几列颜色   height表示有几行颜色-->
      <canvas :width="getColumn" :height="getRow"
              style=" width: 100%; height: 100%;"
              :style="{transform: 'rotate('+ getRotate+'deg) scale('+ getScale+')'}"
      ></canvas>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['column', 'row', 'rotate', 'scale', 'saturation', 'light'],
    name: "AkiBackGround1",
    data: () => {
      return {
        canvas: {},
        ctx: {},
        width: 0,
        height: 0,
        pixels: [],
        Pixel: {}
      }
    },
    computed: {
      getColumn: function () {
        return this.column === undefined ? 2 : this.column
      }, getRow: function () {
        return this.row === undefined ? 2 : this.row
      }, getRotate: function () {
        return this.rotate === undefined ? '0' : this.rotate
      }, getScale: function () {
        return this.scale === undefined ? '2' : this.scale
      }, getSaturation: function () {
        return this.saturation === undefined ? '100' : this.saturation
      }, getLight: function () {
        return this.light === undefined ? '50' : this.light
      }
    },
    mounted: function () {
      this.canvas = document.querySelector('canvas')
      this.ctx = this.canvas.getContext('2d')
      this.width = this.canvas.width
      this.height = this.canvas.height
      this.Pixel = function (x, y) {
        this.x = x;
        this.y = y;
        this.hue = Math.floor(Math.random() * 360);
        let direction = Math.random() > 0.5 ? -1 : 1;
        this.velocity = (Math.random() * 30 + 20) * 0.01 * direction;
      }
      this.Pixel.prototype.update = function () {
        this.hue += this.velocity;
      }
      let s = this.getSaturation
      let l = this.getLight
      this.Pixel.prototype.render = function (ctx) {
        let hue = Math.round(this.hue);
        ctx.fillStyle = 'hsl(' + hue + ', ' + s + '%, ' + l + '% )';
        ctx.fillRect(this.x, this.y, 1, 1);
      }
      for (let x = 0; x < this.width; x++) {
        for (let y = 0; y < this.height; y++) {
          this.pixels.push(new this.Pixel(x, y));
        }
      }
      /*执行动画*/
      this.animate();
    },
    methods: {
      animate() {
        let animateHere = this.animate
        let ctxHere = this.ctx
        this.pixels.forEach(function (pixel) {
          pixel.update();
          pixel.render(ctxHere);
        });
        requestAnimationFrame(animateHere);
      }
    }
  }
</script>

<style scoped>
</style>
