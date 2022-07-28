<template>
  <div class="flex flex-col place-items-center p-6">
    <h1 class="text-3xl">Project of 'The Lift'</h1>
    <div class="view shadow">
      <canvas ref="canvasRef"></canvas>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const config = {
  width: 600,
  height: 600,
};

const canvasRef = ref(null);
let canvas = null;
let ctx = null;
let animation = null;

const object1 = {
  x: 10,
  y: 10,
  w: 55,
  h: 55,
  color: {
    r: 200,
    g: 0,
    b: 0,
    a: 1,
  },
};

const object2 = {
  x: 30,
  y: 30,
  w: 55,
  h: 55,
  color: {
    r: 0,
    g: 0,
    b: 200,
    a: 0.5,
  },
};

const setup = () => {
  canvas = canvasRef.value;
  ctx = canvas.getContext('2d');
  const ratio = window.devicePixelRatio || 1;
  const width = document.body.clientWidth || window.innerWidth || 600;

  // setups
  canvas.width = width * ratio;
  canvas.height = config.height * ratio;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${config.height}px`;
  ctx.scale(ratio, ratio);
};

const draw = () => {
  // clear canvas
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, config.width, config.height);

  // draw object 1
  ctx.fillStyle = `rgba(${object1.color.r}, ${object1.color.g}, ${object1.color.b}, ${object1.color.a})`;
  ctx.fillRect(object1.x, object1.y, object1.w, object1.h);

  // draw object 2
  ctx.fillStyle = `rgba(${object2.color.r}, ${object2.color.g}, ${object2.color.b}, ${object2.color.a})`;
  ctx.fillRect(object2.x, object2.y, object2.w, object2.h);
};

const action = () => {
  object1.x += 0.1;
  object1.y += 0.1;

  object2.x += 0.15;
  object2.y += 0.15;
};

onMounted(() => {
  setup();
  animation = setInterval(() => {
    action();
    draw();
  }, 10);
});

onUnmounted(() => clearInterval(animation));
</script>
