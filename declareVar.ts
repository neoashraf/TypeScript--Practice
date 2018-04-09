function testVarDecleration(){
    for(var i = 0 ; i<5;i++){    // var has functional scope(within the nearest parent function)
        console.log(i);
    }
    console.log('Finally '+i);
}

testVarDecleration();

function testVarDecleration(){
    for(let i = 0 ; i<5;i++){    // let ES6 term. let has block wise scope
        console.log(i);
    } 
    console.log('Finally '+i);   // though it shows error it will produce valid js code
}

testVarDecleration();