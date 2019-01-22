function makeUpperCase(words){
    return new Promise(function(resolve,reject){
        if(words.some((x) => typeof x === 'boolean') || (words.some((x) => typeof x === 'number'))){
            reject(Error("Not all items in array are string!"));
        }
        else{
            var up = String.prototype.toUpperCase.apply(words).split(",");
            
            resolve(up);
        }
        
    })
}
const arrayOfNames = ["kevin","ly","a"];
const mixedArray = ['anarchy', 99, true]




function sortWords(words){
    return new Promise(function(resolve,reject){
        if(words.some((x) => typeof x === 'boolean') || (words.some((x) => typeof x === 'number'))){
            reject(Error("Not all items in array are string!"));
        }
        else{
            words.sort();
            
            resolve(words);
        }
    })

}

makeUpperCase(arrayOfNames)
    .then(sortWords)
    .then((result) => console.log(result))
    .catch(error => console.log(error))

    makeUpperCase(mixedArray)
        .then(sortWords)
        .then((result) => console.log(result))
        .catch(error => console.log(error))

