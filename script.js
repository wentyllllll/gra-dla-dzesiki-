const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let yesScale = 1;
let noScale = 1;
let msgIndex = 0;

const messages = [
  "No 😭",
  "Are you sure?",
  "Pookie please... 🥺",
  "Really??",
  "I'm gonna cry...",
  "Think again! ❤️"
];

function moveAndShrink() {

  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  
  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  noScale -= 0.1;
  if (noScale < 0.2) noScale = 0.2; 

  yesScale *= 1.6;
  
  yesBtn.style.transform = `scale(${yesScale})`;
  noBtn.style.transform = `scale(${noScale})`;

  noBtn.innerText = messages[msgIndex];
  msgIndex = (msgIndex + 1) % messages.length;

  if (yesScale > 12) {
    noBtn.style.display = "none";
  }
}

noBtn.addEventListener("click", moveAndShrink);
noBtn.addEventListener("mouseover", moveAndShrink);

yesBtn.addEventListener("click", () => {
  confetti({
    particleCount: 200,
    spread: 100,
    origin: { y: 0.6 }
  });

  document.body.innerHTML = `
    <div style="height:100dvh; display:flex; flex-direction:column; justify-content:center; align-items:center; background:#ffb6c1; text-align:center; padding:20px;">
      <h1 style="font-size:30px; color:#d6336c; font-family:sans-serif;">YAYYY SHE SAID YESSS!<br>I LOVE YOU DZESIKAAAAAAAA ❤️❤️❤️</h1>
      <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" style="width:80%; max-width:300px; border-radius:15px; margin-top:20px;">
    </div>
  `;
});
