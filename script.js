function firstTask () {
    let num = 5;
    while(num >= 5 && num <= 10) {
        console.log(num);
        num++;
    }
}
firstTask();

function secondTask () {
    let num = 20;
    for(let i = 1; i < 8; i++ ) {
        console.log(num);
        num--;
    }
}
secondTask();

function thirdTask() {
    let num = 2;
    for(let i = 1; i < 6; i++) {
        console.log(num);
        num += 2;
    }
}
thirdTask();


function fourthTask() {
    for (let i = 2; i <= 16; i++) {
        if (i % 2 === 0) {
            continue;
        } else {
            console.log(i);
        }
    }
} 

 
let num = 3;
while(num >= 3 && num <= 15) {
    console.log(num);
    num += 2;
}

function fifthTask() {
    const arrayOfNumbers = [];

    // Пишем решение вот тут
    let num = 10;
    for(let i = 0; i < 11; i++) {
        console.log(arrayOfNumbers.push(num));
        num++;
    }
    
    // Не трогаем
    return arrayOfNumbers;
}
fifthTask();

