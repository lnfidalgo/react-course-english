function test(numberArray) {
  return numberArray.map((number) => {
    return {
      val: number,
    };
  });
}
console.log(test([1, 2, 3]));