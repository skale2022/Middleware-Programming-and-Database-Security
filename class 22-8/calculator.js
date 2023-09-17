const add = function(){
    if(arguments){
        console.log(`There are ${arguments.length} arguments`);
    }
    // var result = val1 + val2;
    // return result
}

const subtract = function(){
    var result = val1 - val2;
    return result
}

let opp = 1

if(opp == 1){
    action = add
}
else{
    action= subtract
}

var result = action(20,40,50,34,78)


// console.log(add(3,5))
// console.log(subtract(3,5))