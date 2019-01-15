module.exports = capatilize = (sentence) => {
    let[first, ... rest] = sentence;
    first = first.toUpperCase();
    rest = rest.join("").toLowerCase();
    console.log(`${first}${rest}`);
    return first+rest;
}


 
