export const avatarTransition = {
  in: { opacity: 1, x: -5, transition: { delay: 0.9 } },
  out: { opacity: 0, x: -50, transition: { delay: 0.25 } },
};
export const avatarMotion = {
  initial: "out",
  animate: "in",
  exit: "out",
  variants: avatarTransition,
};

export const textTransition = {
  out: { scale: 0.75, opacity: 0 },
  in: { scale: 1, opacity: 1, transition: { delay: 0.7 } },
};
export const textMotion = {
  initial: "out",
  animate: "in",
  exit: "out",
  variants: textTransition,
};

export const videoTransition = {
  out: { opacity: 0, transition: { duration: 0.3 } },
  in: { opacity: 1, transition: { duration: 0.3 } },
};
export const videoMotion = {
  initial: "out",
  animate: "in",
  exit: "out",
  variants: videoTransition,
};


export const overlayTransition = {
  out: { opacity: 0, transition: { duration: 0.3 } },
  in: { opacity: 1, transition: { duration: 0.3 } },
};

export const overlayMotion = {
  initial: "out",
  animate: "in",
  exit: "out",
  variants: overlayTransition,
};