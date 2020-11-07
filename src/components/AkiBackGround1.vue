<template>
  <div>
    <div style="width: 100%; height: 100%; overflow: hidden;">
      <!-- width表示有几列颜色   height表示有几行颜色-->
      <canvas width="2" height="2"
              style=" width: 100%; height: 100%;
              transform: rotate(0deg) scale(2);"></canvas>
    </div>
  </div>
</template>

<script>
  export default {
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
      this.Pixel.prototype.render = function (ctx) {
        let hue = Math.round(this.hue);
        ctx.fillStyle = 'hsl(' + hue + ', 100%, 50% )';
        ctx.fillRect(this.x, this.y, 1, 1);
      }
      for (let x = 0; x < this.width; x++) {
        for (let y = 0; y < this.height; y++) {
          this.pixels.push(new this.Pixel(x, y));
        }
      }

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
