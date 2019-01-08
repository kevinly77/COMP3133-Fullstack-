function move(str) {
    if (str.length < 3) {
        return "Word length must be 3 or greater!";
    } 
	var s = str.slice(-3);
    return s+str;
}