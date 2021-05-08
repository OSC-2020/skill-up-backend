const arrayOfSize = (size: number, fillInWith: any = null) =>
  Array.from({ length: size }, (x, i) => (fillInWith ? fillInWith : i));

const moveAnElementInArray = (array: any[], from: number, to: number) => {
  if (!array || array.length - 1 < from || array.length - 1 < to) {
    console.error(
      'Dev error, from/to can not be greater than array length.\n Doing nothing!',
    );
    return false;
  }
  array.splice(from, 0, array.splice(to, 1)[0]);
};
export { arrayOfSize, moveAnElementInArray };
