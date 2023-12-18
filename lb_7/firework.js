
const COLORS = ["red", "blue", "green", "yellow", "pink", "purple", "cyan"];
const PARTICLES_NUMBER = 100;

function createParticle(x, y) {
  const element = document.createElement("div");
  element.style.width = "5px";
  element.style.height = "6px";
  element.style.border = "1px solid black";
  element.style.position = "absolute";
  element.style.top = `${y}px`;
  element.style.left = `${x}px`;
  element.style.transform = "translate(-50%, -50%)";
  element.style.backgroundColor =
    COLORS[Math.floor(Math.random() * COLORS.length)];

  const animation = element.animate(
    [
      {
        transform: `translate(${(Math.random() - 0.5) * 500}px, ${
          (Math.random() - 0.5) * 500
        }px) rotate(${Math.random() * 520}deg)`,
        opacity: 0
      }
    ],
    1500
  );

  animation.finished.then(() => element.remove());

  document.body.appendChild(element);
}

document.addEventListener("click", (e) => {

  const { clientX: x, clientY: y } = e;

  for (let i = 0; i < PARTICLES_NUMBER; i++) {
    createParticle(x, y);
  }
});
