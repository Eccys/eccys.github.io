export const easeInOutQuart = (t) =>
  t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;

export const smoothScrollTo = (
  targetPosition,
  duration = 1200,
  easing = easeInOutQuart
) => {
  if (typeof window === 'undefined') return;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let start = null;

  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const percent = Math.min(progress / duration, 1);

    window.scrollTo(0, startPosition + distance * easing(percent));

    if (progress < duration) {
      window.requestAnimationFrame(step);
    }
  });
};
