var greeter = (myArray, counter) => {
    for (let s of myArray){
        console.log(`Hello ${s}`);
    }
}

greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);