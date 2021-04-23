const arrayOfSize = (size: number, fillInWith: any = null) =>
  Array.from({ length: size }, (x, i) => (fillInWith ? fillInWith : i));

export { arrayOfSize };
