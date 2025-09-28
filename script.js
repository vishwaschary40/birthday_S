// /* Password Logic */
// const validAnswers = ["aagam shivaratri","aagam","saanvi csm","aagam csm","aagam shivratri","aagam shivratri csm"];
// const funResponses = [
//   "Oops! Try harder 😉",
//   "Haha, nope! Guess again 😁",
//   "Vishwas will be disappointed 😜",
//   "Nice try! But wrong 😎",
//   "Serously???",
//   "Go saanvi, you can do it! 🎉"
// ];

// function checkPassword(){
//   const input = document.getElementById('passInput').value.toLowerCase().trim();
//   const modal = document.getElementById('passwordModal');
//   const funMsg = document.getElementById('funMsg');
//   if(validAnswers.includes(input)){
//     modal.style.display = 'none';
//     document.querySelector('.content').style.display = 'block';
//   } else {
//     funMsg.textContent = funResponses[Math.floor(Math.random()*funResponses.length)];
//     document.getElementById('passInput').value = "";
//   }
// }

// /* ASCII Hologram */
// const chars = " .'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$";
// const img = new Image();
// img.src = "photob.png"; // your photo
// img.crossOrigin = "anonymous";

// img.onload = () => {
//   const scale = 1;
//   const tempCanvas = document.createElement("canvas");
//   const tctx = tempCanvas.getContext("2d");
//   tempCanvas.width = img.width * scale;
//   tempCanvas.height = img.height * scale;
//   tctx.drawImage(img, 0, 0, tempCanvas.width, tempCanvas.height);

//   const imageData = tctx.getImageData(0,0,tempCanvas.width,tempCanvas.height);
//   const data = imageData.data;

//   const outputCanvas = document.getElementById("asciiCanvas");
//   const octx = outputCanvas.getContext("2d");

//   const cellW = 4;
//   const cellH = 8;
//   outputCanvas.width = tempCanvas.width * cellW;
//   outputCanvas.height = tempCanvas.height * cellH;

//   let angle = 0;
//   function draw(){
//     octx.clearRect(0,0,outputCanvas.width,outputCanvas.height);
//     angle += 0.01;
//     const dx = Math.sin(angle)*2;
//     const dy = Math.cos(angle)*2;

//     for(let y=0; y<tempCanvas.height; y++){
//       for(let x=0; x<tempCanvas.width; x++){
//         const i = (y*tempCanvas.width + x)*4;
//         const r = data[i], g = data[i+1], b = data[i+2];
//         const brightness = (0.299*r + 0.587*g + 0.114*b)/255;
//         const char = chars[Math.floor(brightness*(chars.length-1))];
//         const pastelR = Math.min(255,r+60);
//         const pastelG = Math.min(255,g+60);
//         const pastelB = Math.min(255,b+60);
//         octx.fillStyle = `rgb(${pastelR},${pastelG},${pastelB})`;
//         octx.fillText(char, x*cellW + dx, y*cellH + dy);
//       }
//     }
//     requestAnimationFrame(draw);
//   }
//   draw();
// };

// /* Sparkles Particles */
// const pCanvas = document.getElementById('particleCanvas');
// const pCtx = pCanvas.getContext('2d');
// let particles = [];

// function initParticles(){
//   pCanvas.width = window.innerWidth;
//   pCanvas.height = window.innerHeight;
//   particles = [];
//   for(let i=0;i<120;i++){
//     particles.push({
//       x: Math.random()*pCanvas.width,
//       y: Math.random()*pCanvas.height,
//       vx: (Math.random()-0.5)*0.4,
//       vy: (Math.random()-0.5)*0.4,
//       size: Math.random()*2+1,
//       color: `rgba(255, 228, 196,${Math.random()*0.5+0.3})`
//     });
//   }
// }
// function animateParticles(){
//   pCtx.clearRect(0,0,pCanvas.width,pCanvas.height);
//   particles.forEach(p=>{
//     p.x += p.vx; p.y += p.vy;
//     if(p.x>pCanvas.width) p.x=0;
//     if(p.x<0) p.x=pCanvas.width;
//     if(p.y>pCanvas.height) p.y=0;
//     if(p.y<0) p.y=pCanvas.height;
//     pCtx.fillStyle = p.color;
//     pCtx.beginPath();
//     pCtx.arc(p.x,p.y,p.size,0,Math.PI*2);
//     pCtx.fill();
//   });
//   requestAnimationFrame(animateParticles);
// }

// window.addEventListener('load',()=>{
//   initParticles();
//   animateParticles();
// });
// window.addEventListener('resize',()=>{
//   initParticles();
// });
/* Password Logic */
const validAnswers = ["aagam shivaratri","aagam","saanvi csm","aagam csm","aagam shivratri","aagam shivratri csm"];
const funResponses = [
  "Oops! Try harder 😉",
  "Haha, nope! Guess again 😁",
  "Vishwas will be disappointed 😜",
  "Nice try! But wrong 😎",
  "Seriously???",
  "Go Saanvi, you can do it! 🎉"
];

function checkPassword(){
  const input = document.getElementById('passInput').value.toLowerCase().trim();
  const modal = document.getElementById('passwordModal');
  const funMsg = document.getElementById('funMsg');
  if(validAnswers.includes(input)){
    modal.style.display = 'none';
    document.querySelector('.content').style.display = 'block';
    initParticles();
    animateParticles();
  } else {
    funMsg.textContent = funResponses[Math.floor(Math.random()*funResponses.length)];
    document.getElementById('passInput').value = "";
  }
}

/* ASCII Hologram Optimized */
const chars = " .'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$";
const img = new Image();
img.src = "photob.png"; 
img.crossOrigin = "anonymous";

img.onload = () => {
  const scale = 0.5;
  const tempCanvas = document.createElement("canvas");
  const tctx = tempCanvas.getContext("2d");
  tempCanvas.width = img.width * scale;
  tempCanvas.height = img.height * scale;
  tctx.drawImage(img, 0, 0, tempCanvas.width, tempCanvas.height);
  const imageData = tctx.getImageData(0,0,tempCanvas.width,tempCanvas.height);
  const data = imageData.data;

  const outputCanvas = document.getElementById("asciiCanvas");
  const octx = outputCanvas.getContext("2d");
  const cellW = 4, cellH = 8;
  outputCanvas.width = tempCanvas.width * cellW;
  outputCanvas.height = tempCanvas.height * cellH;

  const offCanvas = document.createElement("canvas");
  offCanvas.width = outputCanvas.width;
  offCanvas.height = outputCanvas.height;
  const offCtx = offCanvas.getContext("2d");

  for(let y=0; y<tempCanvas.height; y++){
    for(let x=0; x<tempCanvas.width; x++){
      const i = (y*tempCanvas.width + x)*4;
      const r=data[i], g=data[i+1], b=data[i+2];
      const brightness = (0.299*r + 0.587*g + 0.114*b)/255;
      const char = chars[Math.floor(brightness*(chars.length-1))];
      const pastelR = Math.min(255,r+60);
      const pastelG = Math.min(255,g+60);
      const pastelB = Math.min(255,b+60);
      offCtx.fillStyle = `rgb(${pastelR},${pastelG},${pastelB})`;
      offCtx.fillText(char, x*cellW, y*cellH);
    }
  }

  let angle = 0;
  function draw(){
    octx.clearRect(0,0,outputCanvas.width,outputCanvas.height);
    angle += 0.01;
    const dx = Math.sin(angle)*2;
    const dy = Math.cos(angle)*2;
    octx.drawImage(offCanvas, dx, dy);
    requestAnimationFrame(draw);
  }
  draw();
};

/* Sparkles Particles Optimized */
const pCanvas = document.getElementById('particleCanvas');
const pCtx = pCanvas.getContext('2d');
let particles = [];

function initParticles(){
  pCanvas.width = window.innerWidth;
  pCanvas.height = window.innerHeight;
  particles = [];
  for(let i=0;i<80;i++){
    particles.push({
      x: Math.random()*pCanvas.width,
      y: Math.random()*pCanvas.height,
      vx: (Math.random()-0.5)*0.4,
      vy: (Math.random()-0.5)*0.4,
      size: Math.random()*2+1,
      color: `rgba(255, 228, 196,${Math.random()*0.5+0.3})`
    });
  }
}

let lastTime = 0;
function animateParticles(time){
  if(!lastTime) lastTime = time;
  const delta = time - lastTime;
  if(delta > 30){ 
    pCtx.clearRect(0,0,pCanvas.width,pCanvas.height);
    particles.forEach(p=>{
      p.x += p.vx; p.y += p.vy;
      if(p.x>pCanvas.width) p.x=0;
      if(p.x<0) p.x=pCanvas.width;
      if(p.y>pCanvas.height) p.y=0;
      if(p.y<0) p.y=pCanvas.height;
      pCtx.fillStyle = p.color;
      pCtx.beginPath();
      pCtx.arc(p.x,p.y,p.size,0,Math.PI*2);
      pCtx.fill();
    });
    lastTime = time;
  }
  requestAnimationFrame(animateParticles);
}

window.addEventListener('resize',()=>{ initParticles(); });
