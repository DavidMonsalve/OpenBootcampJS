//Calculate the factorial of 10
//using one while loop, one if sentence
//and a break.

n = 10;
i = 9;

while(i > 0){
    n = n*i;
    i--;
    if (i === 1){
        break;
    }
}

console.log("result: ", n);
