let results = new Array(11).fill(0);

for (let i = 0; i < 36000; i++) {
    let dice1 = Math.ceil(Math.random() * 6);
    let dice2 = Math.ceil(Math.random() * 6);
    let sum = dice1 + dice2;
    results[sum - 2]++;
}

console.log(results);
