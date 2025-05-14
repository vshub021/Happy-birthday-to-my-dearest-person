
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;
window.addEventListener("resize", () => {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
});
function random(min, max) {
  return Math.random() * (max - min) + min;
}
class Particle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.speed = random(2, 7);
    this.angle = random(0, Math.PI * 2);
    this.radius = 2;
    this.alpha = 1;
    this.color = color;
  }
  update() {
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;
    this.alpha -= 0.02;
  }
  draw() {
    ctx.globalAlpha = this.alpha;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}
let particles = [];
function createFirework() {
  const x = random(100, w - 100);
  const y = random(100, h / 2);
  const colors = ['#ff4f81', '#ffafbd', '#ffc3a0', '#ff70a6'];
  const color = colors[Math.floor(random(0, colors.length))];
  for (let i = 0; i < 50; i++) {
    particles.push(new Particle(x, y, color));
  }
}
function animate() {
  ctx.clearRect(0, 0, w, h);
  particles.forEach((p, i) => {
    p.update();
    p.draw();
    if (p.alpha <= 0) particles.splice(i, 1);
  });
  requestAnimationFrame(animate);
}
setInterval(createFirework, 1500);
animate();
const messages = ["I love you", "You're my sunshine", "Forever yours", "My queen", "You're beautiful"];
messages.forEach((msg, i) => {
  const note = document.createElement("div");
  note.className = "note";
  note.innerText = msg;
  note.style.left = `${Math.random() * 100}%`;
  note.style.animationDelay = `${i * 2}s`;
  document.body.appendChild(note);
});
const notes = [
  "You light up my world.",
  "Every moment with you is a treasure.",
  "You're the reason I smile every day.",
  "Happy Birthday, my love!",
  "Here's to many more birthdays together!"
];
let idx = 0;
const loveNotesDiv = document.getElementById("loveNotes");
setInterval(() => {
  loveNotesDiv.innerText = notes[idx];
  idx = (idx + 1) % notes.length;
}, 5000);
