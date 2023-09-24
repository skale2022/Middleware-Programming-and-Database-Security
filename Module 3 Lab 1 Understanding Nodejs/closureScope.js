function outerFunction() {
    let closureVariable = "Closure Scope";
    // This variable is accessible to the inner function due to closure
    return function innerFunction(){
        console.log(closureVariable);
        // can access outer function's variables
    }
}

let newFunction = outerFunction();
newFunction();  // Prints "Closure Scope"