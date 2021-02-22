async function slowerMath() {
    try {
        let mathWait = await slowMath.add(6, 2);
        console.log(mathWait);
        mathWait = await slowMath.multiply(mathWait, 2);
        console.log(mathWait);
        mathWait = await slowMath.divide(mathWait, 4);
        console.log(mathWait);
        mathWait = await slowMath.subtract(mathWait, 3);
        console.log(mathWait);
        mathWait = await slowMath.add(mathWait, 98);
        console.log(mathWait);
        mathWait = await slowMath.remainder(mathWait, 2);
        console.log(mathWait);
        mathWait = await slowMath.multiply(mathWait, 50);
        console.log(mathWait);
        mathWait = await slowMath.remainder(mathWait, 40);
        console.log(mathWait);
        mathWait = await slowMath.add(mathWait, 32);
        console.log(`the final number, and the answer to the question of the life, the universe, and everything, is ${mathWait}`);
    } catch (error) {
        console.log(error);
    }
}







// slowMath.add(6, 2).then(num => {  //step 1
//     console.log(num);
//     return slowMath.multiply(num, 2)  //step 2
// }).then(num => {
//     console.log(num);
//     return slowMath.divide(num, 4)  //step 3
// }).then(num => {
//     console.log(num);
//     return slowMath.subtract(num, 3)  //step 4
// }).then(num => {
//     console.log(num);
//     return slowMath.add(num, 98)  //step 5
// }).then(num => {
//     console.log(num);
//     return slowMath.remainder(num, 2) //step 6  
// }).then(num => {
//     console.log(num);
//     return slowMath.multiply(num, 50)  //step 7
// }).then(num => {
//     console.log(num);
//     return slowMath.remainder(num, 40)  //step 8
// }).then(num => {
//     console.log(num);
//     return slowMath.add(num, 32)  //step 9
// }).then(num => {
//     console.log(`the final number, and the answer to the question of the life, the universe, and everything, is ${num}`)  //also step 9
// }).catch(err => {                   
//     console.log(err);               //step11
// })