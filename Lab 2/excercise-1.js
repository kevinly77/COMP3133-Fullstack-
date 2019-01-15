let greeter = (myArray, counter) => {
    for (s of myArray){
        console.log(`Hello ${myArray[s]}`)
    }
}

greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3)