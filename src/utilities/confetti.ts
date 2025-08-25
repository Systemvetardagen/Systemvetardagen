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
