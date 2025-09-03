import confetti from "canvas-confetti";

export const triggerConfetti = (element?: HTMLElement) => {
  if (element) {
    const rect: DOMRect = element.getBoundingClientRect();
    const viewWidth: number = window.innerWidth;
    const viewHeight: number = window.innerHeight;
    const x: number = (rect.left + rect.width / 2) / viewWidth;
    const y: number = (rect.top + rect.height / 2) / viewHeight;

    confetti({
      particleCount: 200,
      spread: 360,
      origin: { x, y },
    });
  } else {
    confetti({
      particleCount: 200,
      spread: 360,
      origin: { x: 0.5, y: 0.5 },
    });
  }
};
export const celebrate = () => {
    console.log("Whooooo");

    confetti({
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.6 },
      colors: [
        "#ff0000",
        "#00ff00",
        "#0000ff",
        "#ffff00",
        "#ff00ff",
        "#00ffff",
      ],
      particleCount: 50,
      gravity: 0.8,
      scalar: 1.2,
    });

    confetti({
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.6 },
      colors: [
        "#ff0000",
        "#00ff00",
        "#0000ff",
        "#ffff00",
        "#ff00ff",
        "#00ffff",
      ],
      particleCount: 50,
      gravity: 0.8,
      scalar: 1.2,
    });

    setTimeout(() => {
      confetti({
        angle: 90,
        spread: 100,
        origin: { x: 0.5, y: 0.7 },
        colors: [
          "#ff0000",
          "#00ff00",
          "#0000ff",
          "#ffff00",
          "#ff00ff",
          "#00ffff",
        ],
        particleCount: 30,
        gravity: 0.6,
        scalar: 0.8,
      });
    }, 200);
  };
