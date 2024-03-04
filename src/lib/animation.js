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

export const stager = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2, // Adjust stagger delay as needed
    },
  },
};

export const boxVariant = {
  hidden: {
    // x: "-100px", //move out of the site
  },
  visible: {
    x: 0, // bring it back to nrmal
    transition: {
      type: "spring",
      damping: 5,
      stiffness: 100,
      restDelta: 0.001,
      // delay: 0.5,
      // when: "beforeChildren", //use this instead of delay
      staggerChildren: 0.2, //apply stagger on the parent tag
      duration: 10,
    },
  },
};

export const listVariant = {
  hidden: {
    y: 200, //move out of the site
    opacity: 0,
  },
  visible: {
    y: 0, // bring it back to nrmal
    opacity: 1,
  },
};
