import { Plugin } from "obsidian";
import confetti from "canvas-confetti";

export default class Confetti extends Plugin {
  async onload() {
    this.registerDomEvent(window, "keypress", (e: KeyboardEvent) => {
confetti({
  angle: randomInRange(55, 125),
  spread: randomInRange(50, 70),
  particleCount: randomInRange(50, 100),
  origin: { x: Math.random(), y: Math.random() - 0.2 }
});

  })

 }
}

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}


