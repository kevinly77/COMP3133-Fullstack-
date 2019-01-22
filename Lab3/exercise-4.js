const delayedMultiply = (num) => {
    setTimeout(() => {
        console.log("Done!")
        var answer = num*num
        return answer
    }, 500);
}

function delayedPromise(number){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            console.log("Done!")
            var answer = number*number
            resolve(answer)
            return answer
            
        }, 500);
        
    });
}

async function asyncPromise(number){
    let promise1 = await new Promise(function(resolve,reject){
        var result = setTimeout(() => {
            console.log(" 1st Done!")
            var answer = number*number
            resolve(answer)
            return answer
            
        }, 500);
    })

    let promise2 = await new Promise(function(resolve,reject){
        var result = setTimeout(() => {
            console.log("2nd Done!")
            var answer = number*number
            resolve(answer)
            return answer
            
        }, 1000);
    })

    var result = [promise1,promise2];
    return result
}



asyncPromise(6)
    .then(result => console.log(result))