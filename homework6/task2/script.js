function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

  console.log(getRandomArbitrary(10, 100));
  console.log(getRandomArbitrary(15, 255));
  console.log(getRandomArbitrary(25, 852));

