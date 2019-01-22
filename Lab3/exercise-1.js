



function compareNumToTen(number){
    return new Promise(function(resolve, reject){
        if(number > 10){
            resolve(number);
            console.log(`${number} is greater than 10, success!`);
        }
        else{
            reject(Error(`${number} is less than 10!, error!`));
        }
    });
}

compareNumToTen(15)
    .then(result => console.log(result))
    .catch(error => console.log(error))
