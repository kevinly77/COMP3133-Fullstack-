function capital_letter(str) 
{
    str = str.split(" ");

    for (let i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

function capital_letter2(str){
    return str.replace(/(^|\s)[a-z]/g,function(f){return f.toUpperCase();});
}