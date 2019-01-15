module.exports = protoReduce = (numbers) => {
    return numbers < 20;
}

var filtered = [1,60,34,30,20,5].filter(protoReduce)
console.log(filtered);
