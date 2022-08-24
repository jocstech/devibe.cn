<template>
  <div class="min-h-screen-lg flex flex-col place-items-center p-6">
    <h1 class="prose text-3xl">Project of 'The Lift'</h1>
    <div class="view border">
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

const realworld = {
  width: 0,
  height: 0,
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

const object3 = {
  x: -100,
  y: -100,
  r: 18,
  color: {
    r: 100,
    g: 100,
    b: 100,
    a: 0.9,
  },
};

const setup = () => {
  realworld.width =
    document.body.clientWidth || window.innerWidth || config.width;
  realworld.height = config.height;

  canvas = canvasRef.value;
  ctx = canvas.getContext('2d');
  const ratio = window.devicePixelRatio || 1;

  // setups
  canvas.width = realworld.width * ratio;
  canvas.height = config.height * ratio;
  canvas.style.width = `${realworld.width}px`;
  canvas.style.height = `${config.height}px`;
  ctx.scale(ratio, ratio);

  // listeners
  window.addEventListener('mousemove', (event) => {
    const rect = canvas.getBoundingClientRect();
    object3.x = event.clientX - rect.left;
    object3.y = event.clientY - rect.top;
  });

  window.addEventListener('mousedown', (event) => {
    object3.r = 60;
  });

  window.addEventListener('mouseup', (event) => {
    object3.r = 18;
  });
};

const draw = () => {
  // clear canvas
  ctx.clearRect(0, 0, realworld.width, realworld.height);

  // draw object 1
  ctx.fillStyle = `rgba(${object1.color.r}, ${object1.color.g}, ${object1.color.b}, ${object1.color.a})`;
  ctx.fillRect(object1.x, object1.y, object1.w, object1.h);

  // draw object 2
  ctx.fillStyle = `rgba(${object2.color.r}, ${object2.color.g}, ${object2.color.b}, ${object2.color.a})`;
  ctx.fillRect(object2.x, object2.y, object2.w, object2.h);

  // draw object 3
  ctx.beginPath();
  ctx.arc(object3.x, object3.y, object3.r, 0, Math.PI * 2, true);
  ctx.fillStyle = `rgba(${object3.color.r}, ${object3.color.g}, ${object3.color.b}, ${object3.color.a})`;
  ctx.strokeStyle = '#000';
  ctx.fill();
  ctx.stroke();
  ctx.closePath(); //关闭路径
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
  });
});

onUnmounted(() => clearInterval(animation));
</script>
