export const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export const itemAnim = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 9,
      stiffness: 100,
      restDelta: 0.001,
    },
  },
};

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const rightToLeft = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 9,
      stiffness: 100,
      restDelta: 0.001,
    },
  },
};
export const leftToRight = {
  hidden: { opacity: 0, x: 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 9,
      stiffness: 100,
      restDelta: 0.001,
    },
  },
};

export const fadin = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { duration: 2 },
  },
};
