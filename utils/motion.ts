export function slideInFromLeft(delay: number) {
  return {
    hidden: { x: -100, opacity: 0 },
    visable: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export function slideInFromRight(delay: number) {
  return {
    hidden: { x: 100, opacity: 0 },
    visable: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export const slideInFromTop = {
  hidden: { x: -100, opacity: 0 },
  visable: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
};
