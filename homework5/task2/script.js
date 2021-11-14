let rez;
let i = 1;

const getSimpleNumber = (a, b) => {
    
nextPrime:
for (let i = a; i <= b; i++) { 
  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime;
  }

  console.log(`результат для промежутка от ${a} до ${b}: `, i);
}
}

getSimpleNumber(7, 27);
getSimpleNumber(13, 155);
getSimpleNumber(20, 200);